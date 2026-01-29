import { Star } from 'lucide-react';

const reviews = [
    {
        name: "Juan Pérez",
        car: "Toyota Camry 2005",
        text: "Me salvó de comprar un auto que tenía la junta soplada. Un genio, súper honesto.",
        stars: 5
    },
    {
        name: "Camila Rodríguez",
        car: "Honda CRV 2010",
        text: "Explicación súper clara para los que no entendemos nada de mecánica. Recomendadísimo.",
        stars: 5
    },
    {
        name: "Santiago M.",
        car: "Ford Falcon",
        text: "Puntual y profesional. El reporte digital es un golazo para negociar el precio.",
        stars: 5
    }
];

export default function SocialProof() {
    return (
        <section className="py-24 bg-zinc-900 border-t border-zinc-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-white text-center mb-16">Lo que dicen los viajeros</h2>

                <div className="grid md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <div key={index} className="bg-zinc-950 p-8 rounded-2xl border border-zinc-800">
                            <div className="flex gap-1 mb-4 text-yellow-500">
                                {[...Array(review.stars)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-current" />
                                ))}
                            </div>
                            <p className="text-zinc-300 mb-6 italic">"{review.text}"</p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center font-bold text-white">
                                    {review.name[0]}
                                </div>
                                <div>
                                    <div className="font-bold text-white">{review.name}</div>
                                    <div className="text-xs text-zinc-500">{review.car}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
