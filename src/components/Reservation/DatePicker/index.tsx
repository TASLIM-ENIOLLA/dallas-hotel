import { useState, useMemo, useRef } from "react";
import { getISODate, getTodaysDate, getTomorrowsDate } from "./_props/date";

export default function Component({ type = "check-in", date, onDateChange }: DatePickerPropType) {
	const dateElement = useRef <any> ();
	const defaultDate = type === "check-in" ? getTodaysDate() : getTomorrowsDate();

	const [value, setValue] = useState <string> (date || defaultDate);

	const formattedValue = useMemo(() => new Date(value).toDateString(), [value]);
	const minDateValue = useMemo(() => getISODate(value), [value]);

	return (
		<button
			onClick={() => dateElement ? dateElement.current.showPicker() : undefined}
			className="border-none outline-none bg-transparent text-left relative overflow-hidden block w-full"
		>
			<input
				type="text"
				defaultValue={formattedValue}
				className="text-lg capitalize bg-transparent font-medium"
			/>
			<input
				type="date"
				value={value}
				ref={dateElement}
				min={minDateValue}
				onChange={({target: { value }}) => setValue(value)}
				className="absolute bottom-0 translate-y-[100%]"
			/>
		</button>
	);
}

export type DatePickerPropType = {
	date?: string,
	type: string,
	onDateChange: ({ date }: { date: string}) => void
}