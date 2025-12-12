import {
    differenceInDays,
    differenceInHours,
    differenceInMinutes,
    differenceInMonths,
    differenceInWeeks,
    differenceInYears,
} from 'date-fns';

export const useRelativeTime = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();

    const minutes = differenceInMinutes(now, date);
    const hours = differenceInHours(now, date);
    const days = differenceInDays(now, date);
    const weeks = differenceInWeeks(now, date);
    const months = differenceInMonths(now, date);
    const years = differenceInYears(now, date);

    if (minutes < 1) return 'Vừa xong';
    if (minutes < 60) return `${minutes} phút trước`;
    if (hours < 24) return `${hours} giờ trước`;
    if (days === 1) return 'Hôm qua';
    if (days < 7) return `${days} ngày trước`;
    if (weeks < 4) return `${weeks} tuần trước`;
    if (months < 12) return `${months} tháng trước`;
    return `${years} năm trước`;
};
