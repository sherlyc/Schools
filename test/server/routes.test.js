import test from "ava";
import request from "supertest";
import db from "../../server/db";

import createServer from "../../server/server";
import setupDb from "../setup-db";

setupDb(test, createServer);

test.cb("GET /schools returns schools", t => {
  request(t.context.app)
    .get("/schools")
    .expect(200)
    .expect("Content-Type", /json/)
    .end((err, res) => {
      t.ifError(err);
      t.true(res.body.schools[0].hasOwnProperty("Name"));
      t.end();
    });
});

test.cb("GET school by ID returns a school correctly", t => {
  request(t.context.app)
    .get("/schools/2")
    .expect(200)
    .expect("Content-Type", /json/)
    .end((err, res) => {
      t.ifError(err);
      t.is(res.body.school.Name, "Taipa Area School");
      t.is(res.body.school.Email, "office@taipa.school.nz");
      t.end();
    });
});

test.cb("POST /schools/add", t => {
  request(t.context.app)
    .post("/schools/add")
    .send({ Name: "High School" })
    .expect(201)
    .end((err, res) => {
      t.ifError(err);
      t.is(res.statusCode, 201);
      t.end();
    });
});

test.cb("DELETE /schools/remove/1", t => {
  request(t.context.app)
    .delete("/schools/remove/1")
    .expect(204)
    .end((err, res) => {
      t.ifError(err);
      t.is(res.statusCode, 204);
      t.end();
    });
});
