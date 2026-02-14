import { isBefore, formatRelative, subDays } from "date-fns"

const DateDivider = ({dateString}) => {
    const oneWeekAgo = subDays(new Date(), 7)
    const isMoreThanAWeekOld = isBefore(dateString, oneWeekAgo)

    if(isMoreThanAWeekOld) return (
        <div className="date-separator text-center">{dateString}</div>
    )

    const relativeDate = formatRelative(new Date(dateString), new Date())
    const label = relativeDate.split(' at ')[0]

    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <div className="date-separator text-center" title={dateString}>{capitalizeFirstLetter(label)}</div>
    )
}

export default DateDivider