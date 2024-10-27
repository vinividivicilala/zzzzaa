import Image from "next/image";
import { BorderBox } from "@/components/ui/BorderBox/BorderBox";

export const About = () => {
    const list = [
        {
            title: "My favourite tech",
            items: [
                "React, NextJS, Typescript",
                "Tailwind, Arduino",
                "HTML, Javascript, CSS, dan lain-lain",
            ],
        },
        {
            title: "Design tools",
            items: ["Figma", "Photoshop, Illustrator", "Lightroom, PowerPoint, Canva"],
        },
        {
            title: "What else?",
            items: [
                "Sepeda, Makan",
                "fotografi",
                "belajar",
            ],
        },
    ];

    return (
        <div className="flex flex-col gap-5">
            <BorderBox
                radius="1.375rem"
                innerClassName="md:flex gap-6 p-5 items-start md:items-center"
                outerClassName="px-4 md:px-0"
                gradient={{
                    start: {
                        stopColor: "#FFFFFF",
                        stopOpacity: 0.8,
                    },
                    end: {
                        stopColor: "#B0B0B0",
                        stopOpacity: 0.2,
                    },
                }}
            >
                <Image
                    src="/profilePicture.png"
                    alt="profilePicture"
                    width={86}
                    height={86}
                    className="float-left mr-4 shrink-0 rounded-2xl md:float-none md:mr-0"
                />
                <p>
                     Halo, Saya Farid Ardiansyah{" "}
                    <span className="font-semibold">
                       Hobi Teknologi, fokus pengembangan skill untuk masa depan lebih baik.
                    </span>{" "}
                    dan lulusan mahasiswa.
                    <br />
                    <br className="md:hidden" /> Saya memandang teknologi dengan mata hobi saya, mata orang normal Saat ini saya sedang berusaha melatih keterampilan mandiri dan mempelajari hal-hal yang saya miliki perlu belajar{" "}
                    <span className="font-semibold">saya sangat termotivasi untuk terus maju</span> dan{" "}
                    <span className="font-semibold">exploring</span> 
                    sejak itu tidak ada batasan dalam pemrograman,skill apapun.
                </p>
            </BorderBox>
            <div className="no-scrollbar flex flex-nowrap gap-5 overflow-scroll px-4 md:px-0">
                {list.map(({ title, items }, index) => (
                    <BorderBox
                        key={index}
                        innerClassName="flex flex-col gap-2.5 p-5"
                        outerClassName="grow shrink-0"
                    >
                        <h3 className="text-lg">{title}</h3>
                        <ul className="flex flex-col gap-1 text-foreground-muted">
                            {items.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </BorderBox>
                ))}
            </div>
        </div>
    );
};
