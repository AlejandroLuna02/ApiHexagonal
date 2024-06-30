import { Request, Response } from 'express';
import { AlmacenService } from '../../application/almacenService';
import { Almacen } from '../../domain/almacen';

export class AlmacenController {
    constructor(private almacenService: AlmacenService) {}

    public async createAlmacen(req: Request, res: Response): Promise<Response> {
        const almacen: Almacen = req.body;
        const createdAlmacen = await this.almacenService.createAlmacen(almacen);
        return res.status(201).json(createdAlmacen);
    }

    public async getAlmacen(req: Request, res: Response): Promise<Response> {
        const id = req.params.id;
        const almacen = await this.almacenService.getAlmacen(id);
        return res.status(200).json(almacen);
    }

    public async updateAlmacen(req: Request, res: Response): Promise<Response> {
        const id = req.params.id;
        const almacen: Almacen = req.body;
        const updatedAlmacen = await this.almacenService.updateAlmacen(id, almacen);
        return res.status(200).json(updatedAlmacen);
    }

    public async deleteAlmacen(req: Request, res: Response): Promise<Response> {
        const id = req.params.id;
        await this.almacenService.deleteAlmacen(id);
        return res.status(204).send();
    }
}
