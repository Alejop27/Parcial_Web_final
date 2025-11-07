import fs from "fs";
import path from "path";

export class SponsorModel {
    fields = [
        { name: 'email', label: 'Correo Electrónico', type: 'email', required: true },
        { name: 'nombres', label: 'Nombres Completos', type: 'text', required: true },
        { name: 'foto', label: 'Foto del Proyecto', type: 'file', required: true },
        { name: 'info', label: 'Información del Proyecto', type: 'textarea', required: true }
    ];

    saveForm(data: any, file: any): void {
        const filePath = path.join(__dirname, "../../repository/sponsorRequests.json");
        let requests = [];
        if (fs.existsSync(filePath)) {
            const jsonData = fs.readFileSync(filePath, "utf-8");
            requests = JSON.parse(jsonData);
        }
        requests.push({
            ...data,
            filename: file?.filename || null,
            timestamp: new Date().toISOString()
        });
        fs.writeFileSync(filePath, JSON.stringify(requests, null, 2), "utf-8");
    }
}
