
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { toast } from '@/components/ui/use-toast';

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  inStock?: boolean;
  restricted?: boolean;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { id, name, description, price, image, category, inStock = true, restricted = false } = product;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (restricted) {
      toast({
        title: "Restricted Product",
        description: "Military ID verification required for purchase",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Added to Cart",
      description: `${name} has been added to your cart`,
    });
  };

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg h-full flex flex-col bg-black/40 backdrop-blur-md border border-white/10">
      <div className="flex flex-col h-full">
        <div className="relative h-48 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 hover:scale-105" 
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="absolute top-2 right-2 flex flex-col gap-2">
            {restricted && (
              <Badge variant="destructive" className="text-xs font-medium">
                Restricted
              </Badge>
            )}
            {!inStock && (
              <Badge variant="outline" className="bg-gray-800 text-white text-xs font-medium">
                Out of Stock
              </Badge>
            )}
            <Badge className="bg-jatayu-secondary text-xs font-medium">
              {category}
            </Badge>
          </div>
        </div>
        <CardContent className="py-4 flex-grow">
          <h3 className="font-semibold text-lg text-jatayu-accent mb-1">{name}</h3>
          <p className="text-gray-300 text-sm line-clamp-2 mb-2">{description}</p>
          <p className="text-jatayu-secondary font-bold text-lg">${price.toLocaleString()}</p>
        </CardContent>
        <CardFooter className="pt-0 pb-4 px-4 gap-2">
          <Button 
            className="w-full bg-jatayu-primary hover:bg-jatayu-primary/90"
            onClick={() => window.location.href = `/products/${id}`}
          >
            View Details
          </Button>
          <Button 
            className="bg-jatayu-accent hover:bg-jatayu-accent/90 p-2" 
            size="icon"
            onClick={handleAddToCart}
            disabled={!inStock || restricted}
          >
            <ShoppingCart size={20} />
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
};

export default ProductCard;
