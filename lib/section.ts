export class Section {
    readonly crn: string;
    readonly course: string;
    readonly title: string;
    readonly type: string;
    readonly hours: number;
    readonly capacity: number;
    readonly instructor: string;
    readonly days: string;
    readonly begin: string;
    readonly end: string;
    readonly location: string;
    readonly exam: string;

    constructor(builder: SectionBuilder) {
        this.crn = builder.crn;
        this.course = builder.course;
        this.title = builder.title;
        this.type = builder.type;
        this.hours = builder.hours;
        this.capacity = builder.capacity;
        this.instructor = builder.instructor;
        this.days = builder.days;
        this.begin = builder.begin;
        this.end = builder.end;
        this.location = builder.location;
        this.exam = builder.exam;
    }
}

export class SectionBuilder {
    private _crn: string;
    private _course: string;
    private _title: string;
    private _type: string;
    private _hours: number;
    private _capacity: number;
    private _instructor: string;
    private _days: string;
    private _begin: string;
    private _end: string;
    private _location: string;
    private _exam: string;

    get crn() {
        return this._crn;
    }
    
    get course() {
        return this._course;
    }

    get title() {
        return this._title;
    }

    get type() {
        return this._type;
    }

    get hours() {
        return this._hours;
    }

    get capacity() {
        return this._capacity;
    }

    get instructor() {
        return this._instructor;
    }

    get days() {
        return this._days;
    }

    get begin() {
        return this._begin;
    }

    get end() {
        return this._end;
    }

    get location() {
        return this._location;
    }

    get exam() {
        return this._exam;
    }

    setCrn(crn: string) {
        this._crn = crn;
        return this;
    }

    setCourse(course: string) {
        this._course = course;
        return this;
    }

    setTitle(title: string) {
        this._title = title;
        return this;
    }

    setType(type: string) {
        this._type = type;
        return this;
    }

    setHours(hours: number) {
        this._hours = hours;
        return this;
    }

    setCapacity(capacity: number) {
        this._capacity = capacity;
        return this;
    }

    setInstructor(instructor: string) {
        this._instructor = instructor;
        return this;
    }

    setDays(days: string) {
        this._days = days;
        return this;
    }

    setBegin(begin: string) {
        this._begin = begin;
        return this;
    }

    setEnd(end: string) {
        this._end = end;
        return this;
    }

    setLocation(location: string) {
        this._location = location;
        return this;
    }

    setExam(exam: string) {
        this._exam = exam;
        return this;
    }

    build() {
        this.validate();
        return new Section(this);
    }

    private validate() {
        if (this._crn === undefined || this._course === undefined || this._title === undefined ||
            this._type === undefined || this._hours === undefined || this._capacity === undefined ||
            this.instructor === undefined || this.days === undefined || this.begin === undefined ||
            this._end === undefined || this._location === undefined || this._exam === undefined) {
                throw new Error("Validation of section object building failed. Missing values.");
            }
    }
}
