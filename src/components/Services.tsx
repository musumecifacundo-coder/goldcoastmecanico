import { Search, ShieldCheck, Wrench, Smartphone } from 'lucide-react';

const services = [
    {
        icon: Search,
        title: "Inspección Pre-compra",
        description: "Revisión completa de 100+ puntos. Detectamos óxido, fugas, problemas de motor y transmisión antes de que pagues.",
        features: ["Escaneo OBD2", "Prueba de manejo", "Informe digital"],
        price: "Desde $150"
    },
    {
        icon: Wrench,
        title: "Mecánica General",
        description: "Mantenimiento preventivo, cambios de aceite, frenos y reparaciones ligeras a domicilio.",
        features: ["Servicio móvil", "Piezas originales", "Garantía"],
        price: "Cotizar"
    },
    {
        icon: Smartphone,
        title: "Digital Health Check",
        description: "¿Solo querés saber si el auto tiene fallas? Escaneo OBD2 completo y reporte digital rápido.",
        features: ["Escaneo de códigos", "Reporte PDF", "Sin revisión física"],
        price: "$50 AUD"
    }
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-zinc-950">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Servicios Profesionales</h2>
                    <p className="text-zinc-400 max-w-2xl mx-auto">
                        Combinamos experiencia mecánica con tecnología de diagnóstico avanzada. La computadora no miente.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800 hover:border-yellow-500/50 transition-colors group">
                            <div className="w-14 h-14 bg-zinc-800 rounded-xl flex items-center justify-center mb-6 group-hover:bg-yellow-500 text-yellow-500 group-hover:text-zinc-900 transition-colors">
                                <service.icon className="w-7 h-7" />
                            </div>

                            <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                            <p className="text-zinc-400 mb-6 leading-relaxed">
                                {service.description}
                            </p>

                            <ul className="space-y-3 mb-8">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-sm text-zinc-300">
                                        <CheckCircleIcon className="w-4 h-4 text-emerald-500 mr-2" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <div className="pt-6 border-t border-zinc-800 flex items-end justify-between">
                                <span className="text-2xl font-bold text-white">{service.price}</span>
                                <span className="text-sm text-yellow-500 font-medium cursor-pointer group-hover:underline">Ver detalles</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function CheckCircleIcon({ className }: { className?: string }) {
    return (
        <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
    );
}
