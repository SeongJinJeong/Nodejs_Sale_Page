const express = require("express");
const router = express.Router(); // 라우터 분리
const beefData = require("./data/beef.json");
const porkData = require("./data/pork.json");
const elseData = require("./data/else.json");

const allData = [porkData[0].data, beefData[0].data, elseData[0].data];

router.get("/api/hello", (req, res) => {
  // app 대신 router에 연결
  res.json({ express: "hello~" });
});

router.get("/api/main", (req, res) => {
  res.json(allData);
  console.log(allData.length);
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
  res.json(allData);
});

router.get("/api/search", (req, res) => {
  const word = req.query.word;
  const wordArray = [];
  allData.map((value, index) => {
    value.map((value, index) => {
      const productName = value.productName;
      if (productName.includes(word) == true) {
        wordArray.push(value);
      }
    });
  });
  if (wordArray.length !== 0) {
    res.json(wordArray);
  } else {
    res.send("no data");
  }
});

module.exports = router; // 모듈로 만드는 부분
