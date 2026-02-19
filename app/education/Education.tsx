import Image from 'next/image'
import { education } from '../data/education'

export function Education() {
    return (
        <div>
            <h2 className='mb-6 text-2xl font-semibold'>Educação</h2>
            <div className='space-y-6'>
                {education.map((item) => (
                    <div
                        key={item.degree + item.institution}
                        className='border-l border-slate-700 pl-4'
                    >
                        <p className='text-sm text-sky-400'>{item.period}</p>

                        <p className='mt-1 text-base font-medium text-slate-100'>
                            {item.degree}
                        </p>

                        <div className='mt-1 flex items-center gap-2 text-sm text-slate-300'>
                            {item.logo && (
                                <Image
                                    src={item.logo}
                                    alt={`Logo ${item.institution}`}
                                    width={28}
                                    height={28}
                                    className='object-contain opacity-80'
                                />
                            )}
                            <span>
                                {item.institution} • {item.city}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
