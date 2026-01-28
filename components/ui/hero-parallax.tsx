"use client";
import React, { useEffect } from "react";
import {
    motion,
    useScroll,
    useTransform,
    useSpring,
    MotionValue,
} from "framer-motion";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export const HeroParallax = ({
    products,
}: {
    products: {
        title: string;
        link: string;
        thumbnail: string;
        category?: string;
    }[];
}) => {
    const firstRow = products.slice(0, 5);
    const secondRow = products.slice(5, 10);
    const thirdRow = products.slice(10, 15);
    const ref = React.useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    useEffect(() => {
        Fancybox.bind("[data-fancybox='hero-parallax']", {
            // Custom options can be added here
        });
        return () => {
            Fancybox.destroy();
        };
    }, []);

    const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

    const translateX = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, 1000]),
        springConfig
    );
    const translateXReverse = useSpring(
        useTransform(scrollYProgress, [0, 1], [0, -1000]),
        springConfig
    );
    const rotateX = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [15, 0]),
        springConfig
    );
    const opacity = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
        springConfig
    );
    const rotateZ = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [20, 0]),
        springConfig
    );
    const translateY = useSpring(
        useTransform(scrollYProgress, [0, 0.2], [-700, 50]),
        springConfig
    );
    return (
        <div
            ref={ref}
            className="h-[230vh] md:h-[250vh] lg:h-[235vh] py-24 md:py-10 lg:py-[490px] px-20 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
        >
            <Header />
            <motion.div
                style={{
                    rotateX,
                    rotateZ,
                    translateY,
                    opacity,
                }}
                className=""
            >
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
                    {firstRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateX}
                            key={product.title}
                        />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row mb-20 space-x-20 ">
                    {secondRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateXReverse}
                            key={product.title}
                        />
                    ))}
                </motion.div>
                <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
                    {thirdRow.map((product) => (
                        <ProductCard
                            product={product}
                            translate={translateX}
                            key={product.title}
                        />
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
};

export const Header = () => {
    return (
        <div className="max-w-7xl relative mx-auto pt-0 py-16 md:py-18 px-4 w-full left-44 top-0">
            <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-8 inline-flex items-center ml-80  gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 backdrop-blur-md"
            >
                <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
                <span className="text-[10px] md:text-[11px] font-mono font-bold uppercase tracking-[0.3em] text-primary">
                    OUR PORTFOLIO
                </span>
            </motion.div>

            <motion.h1
                className="text-4xl md:text-7xl lg:text-8xl font-lastica text-white uppercase tracking-tighter leading-[0.9] mb-"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                THE ULTIMATE <br />
                <span className="ml-44  text-primary italic font-mono font-bold lg:text-6xl">CREsATIVE</span> <span className="text-white/30 font-raleway lg:text-6xl">STUDIO</span>
            </motion.h1>

            <motion.p
                className="max-w-3xl text-lg md:text-xl font-raleway font-medium text-white/60 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.8 }}
            >
                We craft high-performance digital experiences with precision and passion.
                Our team of elite designers and developers transform complex challenges
                into seamless, beautiful products that scale.
            </motion.p>
        </div>
    );
};

export const ProductCard = ({
    product,
    translate,
}: {
    product: {
        title: string;
        link: string;
        thumbnail: string;
        category?: string;
    };
    translate: MotionValue<number>;
}) => {
    // Determine if hover effect should be enabled
    // Default to true if category is missing, or strictly check specific categories?
    // User said: "Web Design" -> hover, "SaaS" -> hover, "Logo Design" -> no hover.
    // I'll enable hover by default if category is NOT "Logo Design", or explicitly check.
    // User said: "Webdesign mai hover... lgo mai na lagay... Saas mai ye hover hu"

    const isLogo = product.category === "Logo Design";
    // Assuming "Web Design" and "SaaS" are key categories, and maybe others.
    // If it is Logo Design, disable hover.

    const enableHover = !isLogo;

    return (
        <motion.div
            style={{
                x: translate,
            }}
            whileHover={enableHover ? {
                y: -20,
            } : undefined}
            key={product.title}
            className="group/product h-80 w-[30rem] relative shrink-0"
        >
            <a
                href={product.thumbnail}
                data-fancybox="hero-parallax"
                data-caption={product.title}
                className={`block ${enableHover ? "group-hover/product:shadow-2xl" : ""}`}
            >
                <img
                    src={product.thumbnail}
                    height="600"
                    width="600"
                    className="object-cover object-left-top absolute h-full w-full inset-0"
                    alt={product.title}
                />
            </a>
            {enableHover && (
                <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
            )}
            {enableHover && (
                <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
                    {product.title}
                </h2>
            )}
        </motion.div>
    );
};
