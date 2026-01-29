import { ArrowRight, CheckCircle } from 'lucide-react';

export default function Hero() {
    return (
        <div className="relative bg-zinc-900 overflow-hidden">
            <div className="absolute inset-0">
                <img
                    src="https://images.unsplash.com/photo-1487754180451-c456f719a1fc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                    alt="Mechanic inspecting engine"
                    className="w-full h-full object-cover opacity-20"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/80 to-transparent" />
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
                <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-500 text-sm font-medium mb-6 animate-fade-in-up">
                        <CheckCircle className="w-4 h-4" />
                        <span>Servicio en Español para Latinos en Australia</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
                        No compres un problema, <span className="text-yellow-500">yo lo reviso por vos</span>.
                    </h1>

                    <p className="text-xl text-zinc-400 mb-8 max-w-2xl leading-relaxed">
                        Evitá que tu aventura termine en una grúa. Inspección mecánica pre-compra <strong>y ayuda con la negociación en inglés</strong> para que no pagues de más.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href="#booking" className="px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-zinc-900 font-bold rounded-xl transition-all flex items-center justify-center gap-2 group">
                            Agendar Inspección
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a href="#services" className="px-8 py-4 bg-zinc-800 hover:bg-zinc-700 text-white font-medium rounded-xl transition-all border border-zinc-700 flex items-center justify-center">
                            Ver Servicios
                        </a>
                    </div>

                    <div className="mt-12 flex items-center gap-4 text-sm text-zinc-500">
                        <div className="flex -space-x-2">
                            {[1, 2, 3, 4].map((i) => (
                                <div key={i} className="w-8 h-8 rounded-full bg-zinc-800 border-2 border-zinc-900 flex items-center justify-center text-xs font-bold text-white">
                                    {/* Avatar placeholders would go here */}
                                    <span className="bg-zinc-700 w-full h-full rounded-full" />
                                </div>
                            ))}
                        </div>
                        <p>Más de <span className="text-white font-bold">50+ latinos</span> asesorados este mes</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
