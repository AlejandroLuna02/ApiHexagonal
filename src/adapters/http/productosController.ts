import { Request, Response } from 'express';
import { ProductosService } from '../../application/productosService';
import { Productos } from '../../domain/productos';

export class ProductosController {
    constructor(private productosService: ProductosService) {}

    public async createProductos(req: Request, res: Response): Promise<Response> {
        const productos: Productos = req.body;
        const createdProductos = await this.productosService.createProductos(productos);
        return res.status(201).json(createdProductos);
    }

    public async getProductos(req: Request, res: Response): Promise<Response> {
        const id = req.params.id;
        const productos = await this.productosService.getProductos(id);
        return res.status(200).json(productos);
    }

    public async updateProductos(req: Request, res: Response): Promise<Response> {
        const id = req.params.id;
        const productos: Productos = req.body;
        const updatedProductos = await this.productosService.updateProductos(id, productos);
        return res.status(200).json(updatedProductos);
    }

    public async deleteProductos(req: Request, res: Response): Promise<Response> {
        const id = req.params.id;
        await this.productosService.deleteProductos(id);
        return res.status(204).send();
    }
}
