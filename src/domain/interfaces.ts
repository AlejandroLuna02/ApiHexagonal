import { User } from './user';
import { Vendedor } from './vendedor';
import { Appointment } from './appointment';
import { Almacen } from './almacen';
import { Productos } from './productos';

export interface UserRepository {
    save(user: User): Promise<User>;
    findById(id: string): Promise<User | null>;
    findAll(): Promise<User[]>;
    update(user: User): Promise<User | null>;
    deleteById(id: string): Promise<void>;
}

export interface VendedorRepository {
    save(vendedor: Vendedor): Promise<Vendedor>;
    findById(id: string): Promise<Vendedor | null>;
    findAll(): Promise<Vendedor[]>;
    update(vendedor: Vendedor): Promise<Vendedor | null>;
    deleteById(id: string): Promise<void>;
}

export interface AppointmentRepository {
    save(appointment: Appointment): Promise<Appointment>;
    findById(id: string): Promise<Appointment | null>;
    findAll(): Promise<Appointment[]>;
    update(appointment: Appointment): Promise<Appointment | null>;
    deleteById(id: string): Promise<void>;
}

export interface AlmacenRepository {
    save(almacen: Almacen): Promise<Almacen>;
    findById(id: string): Promise<Almacen | null>;
    findAll(): Promise<Almacen[]>;
    update(almacen: Almacen): Promise<Almacen | null>;
    deleteById(id: string): Promise<void>;
}

export interface ProductosRepository {
    save(productos: Productos): Promise<Productos>;
    findById(id: string): Promise<Productos | null>;
    findAll(): Promise<Productos[]>;
    update(Productos: Productos): Promise<Productos | null>;
    deleteById(id: string): Promise<void>;
}