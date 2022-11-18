import { parseISO, format } from "date-fns";
import { fr } from "date-fns/locale";

type Props = {
  dateString: string;
};

const DateFormatter = ({ dateString }: Props) => {
  const date = parseISO(dateString);
  return (
    <time className="capitalize" dateTime={dateString}>
      {format(date, "d LLLL yyyy", { locale: fr })}
    </time>
  );
};

export default DateFormatter;
