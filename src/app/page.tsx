'use client';

import { Container, Button } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <Container className="text-center py-5">
      <h1 className="display-4 fw-bold mb-3">Welcome to Toaster Oven Lovin&apos; 🍞🔥</h1>
      <p className="lead">
        Discover easy, budget-friendly recipes that you can make with a toaster oven
        — perfect for UH students with limited kitchens!
      </p>

      <div className="d-flex justify-content-center gap-3 mt-4">
        <Link href="/browse-recipie">
          <Button variant="primary" size="lg">Browse Recipes</Button>
        </Link>
        <Link href="/add-recipe">
          <Button variant="outline-secondary" size="lg">Add Your Recipe</Button>
        </Link>
      </div>

      <div className="mt-5">
        <Image
          src="/images/toaster-oven.png"
          alt="Toaster Oven"
          width={400}
          height={300}
          className="rounded shadow"
        />
      </div>
    </Container>
  );
}
