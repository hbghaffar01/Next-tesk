import { Card, CardContent, Typography, Container, Button } from '@mui/material';
import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden">
      <section className="w-full flex justify-center items-center h-full">
        <Container maxWidth="lg" sx={{ my: 8 }}>
          <div className='w-full flex items-center my-8 border-b-2 border-blue-600'>
            <span className='text-gray-600 font-semibold text-lg py-2'>
              Welcome to Home Page
            </span>
          </div>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div" gutterBottom>
                This page is regarding posts
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                Explore various posts and see the latest updates. Click the button below to view all posts.
              </Typography>
              <Link href="/posts" passHref>
                <Button variant="contained" color="primary">
                  Go to Posts
                </Button>
              </Link>
            </CardContent>
          </Card>
        </Container>
      </section>
    </main>
  );
}
