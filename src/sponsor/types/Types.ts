export interface SponsorFormModel {
    fields: FormField[];
}

interface FormField {
    name: string;
    label: string;
    type: 'text' | 'email' | 'file' | 'textarea';
    required: boolean;
}