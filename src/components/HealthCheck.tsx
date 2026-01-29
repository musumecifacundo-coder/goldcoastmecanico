import { FileCheck, Smartphone, Search, AlertCircle } from 'lucide-react';

export default function HealthCheck() {
    return (
        <section className="py-24 bg-zinc-950 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-yellow-500/10 via-zinc-950 to-zinc-950 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-500 text-sm font-medium mb-6">
                            <Smartphone className="w-4 h-4" />
                            <span>Tecnología de Diagnóstico</span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                            El "Digital Health Check"
                            <br />
                            <span className="text-zinc-500 text-2xl md:text-4xl">Tu reporte mecánico en PDF</span>
                            <span className="ml-4 inline-block px-3 py-1 bg-emerald-500/10 text-emerald-500 text-lg font-bold rounded-lg border border-emerald-500/20 align-middle">
                                $50 AUD
                            </span>
                        </h2>

                        <p className="text-zinc-400 mb-8 leading-relaxed text-lg">
                            Terminada la revisión, recibís en tu WhatsApp un informe completo. Sin términos raros, con fotos y videos de lo que está bien y lo que no.
                        </p>

                        <ul className="space-y-6">
                            <li className="flex gap-4">
                                <div className="w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center flex-shrink-0 border border-zinc-800 text-yellow-500">
                                    <Search className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-1">Inspección Visual + Escáner</h4>
                                    <p className="text-sm text-zinc-500">Códigos de error OBD2, fugas de aceite, estado de correas y chasis.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center flex-shrink-0 border border-zinc-800 text-yellow-500">
                                    <AlertCircle className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-1">Prueba de Manejo</h4>
                                    <p className="text-sm text-zinc-500">Testeamos suspensión, frenos y transmisión en calle y autopista.</p>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="w-12 h-12 rounded-xl bg-zinc-900 flex items-center justify-center flex-shrink-0 border border-zinc-800 text-yellow-500">
                                    <FileCheck className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-white mb-1">Veredicto Final</h4>
                                    <p className="text-sm text-zinc-500">Te digo si el precio es justo, cuánto vas a gastar en arreglos y si conviene comprarlo.</p>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div className="relative">
                        {/* Mockup of the report on a phone */}
                        <div className="relative mx-auto border-zinc-800 bg-zinc-950 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl">
                            <div className="h-[32px] w-[3px] bg-zinc-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
                            <div className="h-[46px] w-[3px] bg-zinc-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
                            <div className="h-[46px] w-[3px] bg-zinc-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
                            <div className="h-[64px] w-[3px] bg-zinc-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
                            <div className="rounded-[2rem] overflow-hidden w-full h-full bg-zinc-900 relative">
                                {/* Screen Content */}
                                <div className="bg-yellow-500 h-32 p-6 pt-12 text-zinc-900">
                                    <div className="font-bold text-lg">Reporte #2491</div>
                                    <div className="text-sm opacity-80">Toyota Corolla 2010</div>
                                </div>
                                <div className="p-4 space-y-4">
                                    <div className="bg-zinc-800 p-3 rounded-lg flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500 font-bold">✓</div>
                                        <div className="text-xs text-white">Motor (Compresión OK)</div>
                                    </div>
                                    <div className="bg-zinc-800 p-3 rounded-lg flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center text-red-500 font-bold">!</div>
                                        <div className="text-xs text-white">Frenos Traseros (Desgaste)</div>
                                    </div>
                                    <div className="bg-zinc-800 p-3 rounded-lg flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500 font-bold">✓</div>
                                        <div className="text-xs text-white">Transmisión (Suave)</div>
                                    </div>

                                    <div className="mt-4 p-3 bg-zinc-800/50 rounded-lg">
                                        <div className="text-xs text-zinc-500 mb-2">Fotos Adjuntas</div>
                                        <div className="grid grid-cols-3 gap-2">
                                            <div className="aspect-square bg-zinc-700 rounded-md"></div>
                                            <div className="aspect-square bg-zinc-700 rounded-md"></div>
                                            <div className="aspect-square bg-zinc-700 rounded-md"></div>
                                        </div>
                                    </div>

                                    <div className="mt-4 pt-4 border-t border-zinc-700">
                                        <div className="text-yellow-500 font-bold text-center">RECOMENDADO</div>
                                        <div className="text-xs text-center text-zinc-500">Buen auto por el precio.</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
