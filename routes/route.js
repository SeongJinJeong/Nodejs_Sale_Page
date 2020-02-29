const express = require("express");
const router = express.Router(); // 라우터 분리
const mainData = require('./data/main.json');
const beefData = require('./data/beef.json');
const porkData = require('./data/pork.json');
const elseData = require('./data/else.json');
const saleData = require('./data/sale.json');

router.get("/api/hello", (req, res) => {
  // app 대신 router에 연결
  res.json({ express: "hello~" });
});

router.get("/api/main", (req, res) => {
  res.json(mainData);
});

router.get("/api/beef", (req, res) => {
  res.json(beefData);
});

router.get("/api/pork", (req, res) => {
  res.json(porkData);
});

router.get("/api/else", (req, res) => {
  res.json(elseData);
});

router.get("/api/sale", (req, res) => {
  res.json(saleData);
});

module.exports = router; // 모듈로 만드는 부분
