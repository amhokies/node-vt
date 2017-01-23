import { expect } from 'chai';
import { Section, SectionBuilder } from '../lib/section';

describe('Section', function() {

    var section: Section;

    before(function() {
        var builder = new SectionBuilder();
        section = builder.setCrn('1234').setCourse('CS 2214').setTitle('Course Title')
                         .setType('T').setHours(3).setCapacity(100).setInstructor('Prof')
                         .setDays('M W').setBegin('7am').setEnd('3pm').setLocation('MCB 129')
                         .setExam('1a').build();
    });

    describe('Init', function() {
        it('should be initialized properly', function() {
            expect(section).to.be.an.instanceOf(Section);
            expect(section).to.have.property('crn').that.equals('1234');
            expect(section).to.have.property('course').that.equals('CS 2214');
            expect(section).to.have.property('title').that.equals('Course Title');
            expect(section).to.have.property('type').that.equals('T');
            expect(section).to.have.property('hours').that.equals(3);
            expect(section).to.have.property('capacity').that.equals(100);
            expect(section).to.have.property('instructor').that.equals('Prof');
            expect(section).to.have.property('days').that.equals('M W');
            expect(section).to.have.property('begin').that.equals('7am');
            expect(section).to.have.property('end').that.equals('3pm');
            expect(section).to.have.property('location').that.equals('MCB 129');
            expect(section).to.have.property('exam').that.equals('1a');
        });

        it('should throw an exception if the builder fails', function() {
            // Incomplete builder (missing exam property)
            var builder = new SectionBuilder().setCrn('1234').setCourse('CS 2214')
                             .setTitle('Course Title').setType('T').setHours(3).setCapacity(100)
                             .setInstructor('Prof').setDays('M W').setBegin('7am').setEnd('3pm')
                             .setLocation('MCB 129');

            // wrapping call to build so that it's picked up by the code coverage
            expect(function() { builder.build(); }).to.throw(Error);
        });
    });
});
