import { Productos } from '../domain/productos';
import { ProductosRepository } from '../domain/interfaces';


export class ProductosService {
    constructor(private productosRepository: ProductosRepository) {}

    async createProductos(productos: Productos): Promise<Productos> {
        return this.productosRepository.save(productos);
    }

    async getProductos(id: string): Promise<Productos | null> {
        return this.productosRepository.findById(id);
    }

    async updateProductos(id: string, productos: Productos): Promise<Productos | null> {
        return this.productosRepository.update(productos);
    }

    async deleteProductos(id: string): Promise<void> {
        return this.productosRepository.deleteById(id);
    }
}
