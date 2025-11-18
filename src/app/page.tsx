'use client';

import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import Link from 'next/link';
import Image from 'next/image';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Container fluid className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1 className="display-3 fw-bold mb-4" style={{ color: '#1a5f4f' }}>
                Cook Smart, Eat Well, Save Money
              </h1>
              <p className="lead mb-4" style={{ color: '#6c757d' }}>
                Discover delicious recipes designed for college students with limited kitchens, tight budgets, and busy schedules.
              </p>
              <ul className="list-unstyled mb-4" style={{ color: '#6c757d' }}>
                <li className="mb-2">✓ Toaster oven-friendly recipes</li>
                <li className="mb-2">✓ Price breakdowns per serving</li>
                <li className="mb-2">✓ Ingredients available near UH campus</li>
                <li className="mb-2">✓ Puʻu filters (vegan, gluten-free, etc)</li>
              </ul>
              <div className="d-flex gap-3">
                <Button 
                  variant="primary" 
                  size="lg"
                  style={{ 
                    backgroundColor: '#ff6b35', 
                    borderColor: '#ff6b35',
                    borderRadius: '25px',
                    padding: '12px 30px'
                  }}
                  as={Link}
                  href="/browse-recipie"
                >
                  Sign In to Start Cooking
                </Button>
                <Button 
                  variant="outline-primary" 
                  size="lg"
                  style={{ 
                    borderColor: '#ff6b35',
                    color: '#ff6b35',
                    borderRadius: '25px',
                    padding: '12px 30px'
                  }}
                  as={Link}
                  href="/browse-recipie"
                >
                  Browse Recipes
                </Button>
              </div>
            </Col>
            <Col md={6} className="text-center">
              <Image 
                src="/images/toaster-oven-pizza.jpg" 
                alt="Toaster Oven Pizza" 
                width={600} 
                height={450}
                className="rounded shadow-lg"
                style={{ objectFit: 'cover' }}
              />
            </Col>
          </Row>
        </Container>
      </Container>

      {/* Quick Stats Section */}
      <Container className="py-5">
        <h2 className="text-center mb-5 fw-bold">Quick Stats</h2>
        <Row className="text-center">
          <Col md={3} sm={6} className="mb-4">
            <Card className="border-0 shadow-sm h-100">
              <Card.Body>
                <h3 className="display-5 fw-bold" style={{ color: '#ff6b35' }}>140</h3>
                <p className="text-muted">Recipes</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} sm={6} className="mb-4">
            <Card className="border-0 shadow-sm h-100">
              <Card.Body>
                <h3 className="display-5 fw-bold" style={{ color: '#ff6b35' }}>5.4M</h3>
                <p className="text-muted">Visits</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} sm={6} className="mb-4">
            <Card className="border-0 shadow-sm h-100">
              <Card.Body>
                <h3 className="display-5 fw-bold" style={{ color: '#ff6b35' }}>21.8K</h3>
                <p className="text-muted">Average price</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} sm={6} className="mb-4">
            <Card className="border-0 shadow-sm h-100">
              <Card.Body>
                <h3 className="display-5 fw-bold" style={{ color: '#ff6b35' }}>4.2 ★</h3>
                <p className="text-muted">Reviews</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
