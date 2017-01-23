import {Section, SectionBuilder} from './lib/section';

let x = new SectionBuilder();

//  private _crn: string;
//     private _course: string;
//     private _title: string;
//     private _type: string;
//     private _hours: number;
//     private _capacity: number;
//     private _instructor: string;
//     private _days: string;
//     private _begin: string;
//     private _end: string;
//     private _location: string;
//     private _exam: string;

x.setCrn('1234').setCourse('Balls 101').setTitle('Introduction to Balls')
 .setType('T').setHours(3).setCapacity(100).setInstructor('Balls Master').setDays('M W').setBegin('7am')
 .setEnd('3pm').setLocation('MCB 129').setExam('123')

x.build();