import React, {
    useState,
} from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';

const Planning = (props) => {
    const granularity = 15;

    const initCalendar = (days = 7, date = moment()) => {
        const calendar = [{
            id: 0,
        }];
        for (let i = 1; i <= days; i += 1) {
            calendar.push({
                id: i,
                date: moment(date.format('YYYY-MM-DD')),
            });
            date.add(1, 'days');
        }
        return calendar;
    };

    const initTimes = () => {
        const times = [];
        const begin = moment().set('hour', 9).set('minute', 0);
        const end = moment().set('hour', 20).set('minute', 0);

        while (begin <= end) {
            times.push({
                time: moment(begin.format('YYYY-MM-DD HH:mm')),
            });
            begin.add(granularity, 'minutes');
        }
        return times;
    };

    const [calendar, setCalendar] = useState(initCalendar());
    const [times, setTimes] = useState(initTimes());

    const displayRows = (key) => {
        const { id = null } = key;
        const timesColumn = !id;
        const rows = [{
            header: true,
            date: key.date,
        }, ...times];

        return rows.map((row) => {
            const { header = false, date = null, time } = row;

            if (header) {
                const day = !date ? '' : `${date.format('dddd').substring(0, 3)}. ${date.format('DD')}`;
                return (
                    <div key="header" className="header-row">{ day }</div>
                );
            }
            return (
                <div className={`cell cell-${granularity} ${timesColumn ? 'cell-times' : ''}`} key={time.format('H-mm')}>
                    {timesColumn ? time.format('H:mm') : ''}
                </div>
            );
        });
    };

    const displayColumns = () => calendar.map(key => (
        <div key={`column-${key.id.toString()}`} className={`grid-column ${key.id === 0 ? 'column-time' : ''}`}>
            { displayRows(key) }
        </div>
    ));

    return (
        <div className="planning">
            <div className={`grid-content grid-${calendar.length}`}>
                { displayColumns() }
            </div>
        </div>
    );
};

Planning.propTypes = {
};

Planning.defaultProps = {
};

export default Planning;
