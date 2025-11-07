import { SponsorFormModel } from '../types/Types';
import { writeFileSync, readFileSync } from 'fs';
import { join } from 'path';

export class SponsorModel implements SponsorFormModel {
    fields: SponsorFormModel['fields'] = [
        { name: 'email', label: 'Correo Electrónico', type: 'email', required: true },
        { name: 'nombres', label: 'Nombres Completos', type: 'text', required: true },
        { name: 'foto', label: 'Foto del Proyecto', type: 'file', required: true },
        { name: 'info', label: 'Información del Proyecto', type: 'textarea', required: true }
    ];

    saveForm(data: any, file: any): void {
        const requests = JSON.parse(readFileSync(join(__dirname, '../repository/sponsorRequests.json'), 'utf-8'));
        requests.push({
            ...data,
            filename: file?.filename || null,
            timestamp: new Date().toISOString()
        });
        writeFileSync(join(__dirname, '../repository/sponsorRequests.json'), JSON.stringify(requests, null, 2));
    }
}