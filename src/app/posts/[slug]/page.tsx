import { notFound } from 'next/navigation';
import { Card, CardContent, Typography, Container, Grid, Divider } from '@mui/material';
import { blue } from '@mui/material/colors';

interface Post {
    id: number;
    title: string;
    body: string;
}

interface Comment {
    id: number;
    postId: number;
    name: string;
    email: string;
    body: string;
}

async function fetchPost(slug: string): Promise<Post> {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`, {
        cache: 'no-store',
    });

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

async function fetchComments(postId: number): Promise<Comment[]> {
    const res = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`, {
        cache: 'no-cache',
        next: { revalidate: 10 }
    });

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

export default async function ProductDetails({ params }: { params: { slug: string } }) {
    const slug = params.slug;
    let post: Post | null = null;
    let commentData: Comment[] = [];

    try {
        post = await fetchPost(slug);
    } catch {
        notFound();
    }

    try {
        if (post) {
            commentData = await fetchComments(post.id);
        }
    } catch (error) {
        return <div>Error: {error instanceof Error ? error.message : 'Unknown error'}</div>;
    }

    if (!post) {
        return <div>Post not found</div>;
    }

    return (
        <div className='flex flex-col min-h-screen'>
            <Container sx={{ py: 5, display: 'flex', flexDirection: 'column', gap: 3 }}>
                <Card sx={{
                    border: `2px solid ${blue[500]}`,
                    borderRadius: 2,
                    maxWidth: '100%',
                    overflow: 'hidden'
                }}>
                    <CardContent>
                        <Typography variant="h4" component="div" gutterBottom>
                            {post?.id}
                        </Typography>
                        <Typography variant="h4" component="div" gutterBottom>
                            {post?.title}
                        </Typography>
                        <Typography variant="body1" color="text.secondary" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                            {post?.body}
                        </Typography>
                    </CardContent>
                </Card>

                <Divider sx={{ my: 2 }} />

                {commentData.map(comment => (
                    <Card key={comment?.id} sx={{
                        border: `1px solid ${blue[500]}`,
                        borderRadius: 2,
                        mb: 2,
                        maxWidth: '100%'
                    }}>
                        <CardContent>
                            <Typography variant="h6" component="div" gutterBottom>
                                {comment?.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {comment?.body}
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                                {comment?.email}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </Container>
        </div>
    );
}
