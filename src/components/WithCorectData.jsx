export const WithCorectData = (Component) => {
    return function hocComponent(props) {
        const now = new Date(),
            date = new Date(props.date);
        const hrs = ((now - date) / 1000 / 60 / 60).toFixed(1);
        let result;

        if (hrs > 1) result = '5 часов назад';
        if (hrs > 24 && hrs < 48) result = '1 день назад';
        if (hrs > 48) result = `${(hrs / 24).toFixed()} дней назад`;
        if (hrs < 1) result = '12 минут назад';

        return <Component date={result} />;
    };
};
