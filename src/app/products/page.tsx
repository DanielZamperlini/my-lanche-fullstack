import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const ProductPage = () => {
    return (
        <div className="bg-blue-200 p-10">
            <h1 className="text-red-900">products page</h1>
            <Button className='m-2'>fsw 7.0</Button>
            <Input className='m-4' type="text" placeholder='bora codaarrrr' />
        </div>
    );
}
 
export default ProductPage;