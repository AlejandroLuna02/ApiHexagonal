import { AlmacenRepository } from '../domain/interfaces';
import { Almacen } from '../domain/almacen';

export class AlmacenService {
    constructor(private almacenRepository: AlmacenRepository) {}

    async createAlmacen(almacen: Almacen): Promise<Almacen> {
        return this.almacenRepository.save(almacen);
    }

    async getAlmacen(id: string): Promise<Almacen | null> {
        return this.almacenRepository.findById(id);
    }

    async updateAlmacen(id: string, user: Almacen): Promise<Almacen | null> {
        return this.almacenRepository.update(user);
    }

    async deleteAlmacen(id: string): Promise<void> {
        return this.almacenRepository.deleteById(id);
    }
}
