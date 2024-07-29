import { Card, CardContent, Typography, Container, Grid, Box } from '@mui/material';
import Link from 'next/link';
import Button from '@mui/material/Button';

interface Post {
    id: number;
    title: string;
    body: string;
}

async function fetchPosts(): Promise<Post[]> {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        cache: 'no-cache',
        next: { revalidate: 10 }
    });

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json();
}

export default async function Page() {
    let postData: Post[] = [];

    try {
        postData = await fetchPosts();
    } catch (error) {
        return <div>Error: {error instanceof Error ? error.message : 'Unknown error'}</div>;
    }


    function truncateText(text: string, wordLimit: number = 3): string {
        const words = text.split(' ');
        if (words.length <= wordLimit) {
            return text;
        }
        return words.slice(0, wordLimit).join(' ') + '...';
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Container sx={{ flexGrow: 1, py: 5 }}>
                <Grid container spacing={3}>
                    {postData.map(post => (
                        <Grid item xs={12} sm={6} md={4} key={post?.id}>
                            <Card sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <div className="flex flex-col justify-between h-full">
                                        <div className="flex flex-col">
                                            <Typography component="span">
                                                {post?.id}
                                            </Typography>
                                            <Typography variant="h5" component="div">
                                                {post?.title}
                                            </Typography>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <Typography variant="body2" color="text.secondary">
                                                {truncateText(post?.body)}
                                            </Typography>
                                            <Button variant="contained">
                                                <Link href={`/posts/${post?.id}`} passHref>
                                                    Click Me.
                                                </Link>
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Container>
            <Box sx={{ mt: 'auto', position: 'relative', bottom: 0, width: '100%' }}>
                <footer style={{ backgroundColor: '#f1f1f1', padding: '10px 0', textAlign: 'center' }}>
                    <Typography variant="body2" color="text.secondary">
                        &copy; {new Date().getFullYear()} Haseeb. All rights reserved.
                    </Typography>
                </footer>
            </Box>
        </div>
    );
}
