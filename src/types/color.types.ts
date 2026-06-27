export interface Color {
    id: number;
    title: string;
    color: string;
}

export interface ColorsResponse {
    colors: Color[];
}