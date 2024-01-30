export interface ImageType {
  id?: string;
  tag: string;
  area: string;
  position: number;
  imageUrl: string;
  responsiveMode: string;
}

export interface TextType {
  id?: string;
  area: string;
  text: string;
  updatedAt?: Date;
  created_at?: Date;
  position: string;
  titulo: string | null;
}

export interface QuestionType{
  id: string;
  question: string;
  response: string;
}
export interface ValueType{
  id: string;
  valor: string;
  titulo: string;
}

export interface CreateOrcamentoReqBody {
  trafegoCanal: string;
  conheceEspaco: boolean;
  dataFim: Date;
  dataInicio: Date;
  seguranca: boolean;
  limpeza: boolean;
  recepcionista: boolean;
  nome: string;
  email: string;
  telefone: string;
  texto: string;
  convidados: number;
  valorBase: number;
  qtdHorasExtras: number;
  valorHoraExtra: number;
  total: number;
}