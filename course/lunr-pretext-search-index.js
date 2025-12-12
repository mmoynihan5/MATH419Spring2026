var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "syllabus",
  "level": "1",
  "url": "syllabus.html",
  "type": "Section",
  "number": "",
  "title": "Syllabus",
  "body": " Syllabus   Welcome to MATH 419, Section 001 for Spring 2026.     Course Information     Instructor  Prof. Moynihan, HH 402D, mmoynihan5@framingham.edu .    Student Hours  TBD   Important : I want to see you in student hours, and will happily make appointments with you outside of the regular hours. I'm also available by email and will respond within 24 hours, usually much sooner. There is little I enjoy more than discussing mathematics, so you are really doing me a favor by coming to see me.    Class meets  MW 2:30pm - 4:20pm in HA 510    Course Description  An introduction to algebraic structures including groups, rings, and fields, and their sub-structures, as well as homomorphisms and isomorphisms. Fundamental number theoretic topics are included to establish connections and provide examples in the context of abstract algebra.    Prerequisite  Completion of MATH 226 Linear Algebra with a minimum grade of C (2.00) or higher.    Textbook   Abstract Algebra: Theory and Applications by Thomas W. Judson.   Read Online    Reading Mathematics   Don’t just read it; fight it! Ask your own questions, look for your own examples, discover your own proofs. Is the hypothesis necessary? Is the converse true? What happens in the classical special case? What about the degenerate cases? Where does the proof use the hypothesis?   Paul Halmos       Course Overview       Assessments and Grades     Learning targets  By the end of this course, you should be able to:              Assessment of Learning Targets      Final Exam      Assessment of Mathematical Engagement  Your level of effort and engagement will be assessed through your participation in class and completion of a variety of homework assignments.   Participation      Daily Prep Assignments      Practice Problems      Written Homework         Final Grades       "
},
{
  "id": "sec-course-policies",
  "level": "1",
  "url": "sec-course-policies.html",
  "type": "Section",
  "number": "",
  "title": "Course Policies",
  "body": " Course Policies   Attendance  Regular attendance is an expectation for all students in this course because attendance is important for learning the material. But attendance means more than simply physical presence. It also requires mental presence.  There is no attendance grade. I expect you to take care of yourself and those around you. IF YOU ARE ILL, YOU SHOULD NOT ATTEND CLASS. Otherwise, I expect to see you in class.    Late work      Classroom Decorum      Academic Integrity  Integrity is essential to academic life. Consequently, students who enroll at Framingham State University agree to maintain high standards of academic honesty and scholarly practice. They shall be responsible for familiarizing themselves with the published policies and procedures regarding academic honesty. Common infractions of the Policy on Academic Honesty in mathematics courses include, but are not limited to:   Plagiarism: claiming as one's own work the published or unpublished literal or paraphrased work of another. It should be recognized that plagiarism is not only academically dishonest but also illegal; (Proofs are writing! Using someone else's proof without proper citation is plagiarism!)    Use of dishonest procedures in computer, laboratory, studio, or field work;    Cheating on exams, tests, quizzes, assignments, and papers, including the giving or acceptance of these materials and other sources of information without the permission of the instructor(s);    Unauthorized collaboration with other individuals in the preparation of course assignments;       Generative AI  Use of AI in proof writing is prohibited. All proofs are writing assignments and should be done on your own. Also, LLM's are good at producing nonsense that sounds rational. They are bad at producing actual proofs.    Antiracism at FSU  At Framingham State University, faculty, staff, and students work together to sustain a learning, working, and living community free from hate, discrimination, harassment, and intolerance. We recognize the damaging effects of systemic racism - including policies, structures, and historic practices - on the experience and success of communities of color. Coming from different backgrounds and different levels of privilege, we can all affirm and engage in antiracist work.  Diversity of voices, and of minds, strengthens our ability to solve problems and to ask and answer questions about the world we share. As your instructor, I commit to upholding community values of inclusion, civility, accessibility, and mutual respect. I expect this class to commit to creating a community that affirms and welcomes all persons from diverse backgrounds and experiences, and supports the realization of everyone's potential.    Sexual Harassment  Framingham State University is committed to maintaining a safe and healthy learning, living and working environment that is free from all forms of sexual violence, sexual harassment, gender-based harassment, domestic violence, dating violence, stalking and retaliation. If you or someone you know has experienced any form of sexual or gender-based misconduct, we urge you to visit the SHAPE website for information regarding on-campus and community resources, University policy, contact information for the Title IX Coordinators, confidential and non-confidential reporting options, victim rights, and more.    Notice of Non-Discrimination and Diversity  Framingham State University is committed to a policy of non-discrimination, equal opportunity, diversity, and affirmative action. The University is dedicated to providing educational, working, and living environments that value the diverse backgrounds of all people. Furthermore, the Massachusetts Civil Rights Act (``MCRA,'' M.G.L. c. 12, §§ 11H, 11I, 11J) protects the rights of all residents of and visitors to Massachusetts to be free from bias-motivated threats, intimidation, and coercion that interfere with their civil rights. The MCRA protects the right to attend school, live peacefully, and enjoy other basic rights.    Syllabus Changes  The instructor reserves the right to make changes to this syllabus. Any changes will be announced to the class in a timely manner.   "
},
{
  "id": "sec-important-dates",
  "level": "1",
  "url": "sec-important-dates.html",
  "type": "Subsection",
  "number": "",
  "title": "Important Dates",
  "body": " Important Dates     Friday, Aug 25  Last day to add a class    Monday, Sep 4  Labor Day (no classes)    Monday, Sep 8  Last day to drop a class    Nov 26 - Nov 28  Thanksgiving break (no classes Wednesday, Thursday or Friday)    Friday, Dec 5  Last day to withdraw from class and receive a W    Thursday, Dec 11  Final Exam from 10:45am to 1:15pm     "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
