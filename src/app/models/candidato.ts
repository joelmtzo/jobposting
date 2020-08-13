interface Candidato {
  idcandidato: number;
  nombre: string;
  apellidos: string;
  telefono: string;
  titulo: string;
  expectativaSalarial: number;
  experienciaLaboralList: any[];
  nivelacademicoId: NivelacademicoId;
  municipioId: MunicipioId;
  usuarioId: UsuarioId;
  categoriaId: CategoriaId;
}

interface CategoriaId {
  idcategoria: number;
  nombre: string;
}

interface UsuarioId {
  idusuario: number;
  email: string;
  password: string;
  fechaRegistro: string;
  admEstatus: boolean;
  roles: Role[];
}

interface Role {
  id: number;
  name: string;
  description: string;
}

interface MunicipioId {
  idmunicipio: number;
  nombre: string;
  estadoId: EstadoId;
}

interface EstadoId {
  idestado: number;
  nombre: string;
}

interface NivelacademicoId {
  idnivelAcademico: number;
  descripcion: string;
}