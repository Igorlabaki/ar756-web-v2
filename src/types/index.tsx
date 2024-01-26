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