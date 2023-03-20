const request = require("supertest");
const { response } = require("../app");
const app = require("../app");
describe("Questions API", () => {
  it("GET /service-questions ===> List or arrays of Questions 200 ok", () => {
    return request(app)
      .get("/service-questions")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect.arrayContaining([
          {
            questionId: expect.any(Number),
            contestId: expect.any(Number),
            questionName: expect.any(String),
            description: expect.any(String),
            questionText: expect.any(String),
            createdAt: expect.any(String),
          },
        ]);
      });
  });

  it("GET /service-questions/id ===> A specific Question 200 ok", () => {
    return request(app)
      .get("/service-questions/1")
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.objectContaining({
            questionId: 1,
            contestId: expect.any(Number),
            questionName: expect.any(String),
            description: expect.any(String),
            questionText: expect.any(String),
            createdAt: expect.any(String),
          })
        );
      });
  });

  it("GET /service-questions/id ===> A specific Questions 404 NOT Found", () => {
    return request(app).get("/service-questions/1234").expect(404);
  });

  it("POST /service-questions ===> Create a Questions 201 CREATED", () => {
    return request(app)
      .post("/service-questions")
      .send({
        contestId: 1,
        questionName: "Test Question 1",
        description: "Test Question Description 1",
        questionText: "Test Question Text 1"
      })
      .expect("Content-Type", /json/)
      .expect(201)
      .then((response) => {
        expect(response.body).toEqual(
          expect.objectContaining({
            questionId: expect.any(Number),
            contestId: 1,
            questionName: "Test Question 1",
            description: "Test Question Description 1",
            questionText: "Test Question Text 1",
            createdAt: expect.any(String)

          })
        );
      });
  });

  it("PUT /service-questions/id ===> Update a Questions 200 ok", () => {
    return request(app)
      .put("/service-questions/1")
      .send({
        contestId: 1,
        questionName: "Test Question 1",
        description: "Test Question Description 1",
        questionText: "Test Question Text 1"
      })
      .expect("Content-Type", /json/)
      .expect(200)
      .then((response) => {
        expect(response.body).toEqual(
          expect.objectContaining({
            questionId: expect.any(Number),
            contestId: 1,
            questionName: "Test Question 1",
            description: "Test Question Description 1",
            questionText: "Test Question Text 1",
            createdAt: expect.any(String)
          })
        );
      });
  });
});
