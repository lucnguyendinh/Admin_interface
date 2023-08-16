'use client';
import { Icon } from '@iconify/react';

type Icon = {
    icon: string;
    color?: string;
    width?: string;
    height?: string;
    className?: string;
};

export default function Ic(props: Icon) {
    const { icon, color, width, height, className } = props;
    return <Icon icon={icon} color={color} width={width} height={height} className={className} />;
}
