const calender_table = document.getElementById('calendar');
const year_input = document.getElementById('year');
const month_input = document.getElementById('month');
const date_input = document.getElementById('day');
const weeks = ["日", "月", "火", "水", "木", "金", "土"];

document.getElementById('make').onclick = function () {
    const year = Number(year_input.value);
    const month = Number(month_input.value);
    const date = Number(date_input.value);
    const prev_month_date_cnt = new Date(year, month - 1, 1).getDay();
    const next_month_date_cnt = 6 - new Date(year, month, 0).getDay();
    const curr_month_date_cnt = new Date(year, month, 0).getDate();
    const total_date_cnt = prev_month_date_cnt + curr_month_date_cnt + next_month_date_cnt;

    let calendar = '';
    calendar += createHeader();

    let dates = [];
    for (let i = 0, val = -prev_month_date_cnt + 1; i < total_date_cnt; i++, val++) {
        dates.push(1 <= val && val <= curr_month_date_cnt ? val : '');
        if (i !== 0 && (i + 1) % 7 === 0) {
            calendar += createWeek(dates, date);
            dates = [];
        }
    }

    calender_table.innerHTML = calendar;
}

const createHeader = () => {
    let header = '';
    header += '<tr>';
    for (const week of weeks) header += "<th class='th'>" + week + "</th>";
    header += '</tr>';
    return header;
};

const createWeek = (dates, target) => {
    let week = '';
    week += '<tr>';
    for (const date of dates) week += '<td class=' + (date === target) ? 'current' : '' + '>' + date + '</td>';
    week += '</tr>';
    return week;
}

