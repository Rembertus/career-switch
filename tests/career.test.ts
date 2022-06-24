import request from 'supertest';
import app from '../server';

jest.setTimeout(30000);

describe('Career', () => {
  var token = ''
  var blocksNotSecuential = [
    "oob3XkyWRlWq5zDn8RDaV10VxMyTYZ9GxrSgNPGmu69MHnGfuICuWzBQLv0QLoKEhkyui3NMCkmam14V4wmoCS3kDEV4fNjnWN2i",
    "8aQIYN2CoTHktH9Z4KHXHwWj8Elozt5tlaT4vfOhyE3vA2AXn6P9LTefIMdDHdsNlKpnlt3RTHHFJNOUTGdA51FbeRsQ1dTd35I5",
    "yleQxFkFghT3uDEzxSrQVbKLN9Y3pMYbh447kbsDEKCCR7I07yFu6ul9PnDYGaxBZ5kVeIGz2Caph6hrMfOEtfwT9dwkF5Q9WWnp",
    "RWB1KGpARmMKyGxJeEKbIPxovqOly1mKJqjaRuC4Eqoz9Ak8crUvcIeE9TM3u8p5LKEwwavmOiFDFOMtVYCIBHGSXmweRYoYDLwF",
    "Lb7PtEGfnKxByD8ZNxr36TAFTYkeaeKFl4D2qo6JdTlg3iYWLXte6nEhymbeLmmoz7ElqnkIqDeZVvqdtbda6CjUcwYCoyHdbpnh",
    "tA1aqTaj2UQwJlqyUR7zpdZZTHGdiaDGHuhjd2UFSqtfh0c0qDPj6bwIX7tWLKSlVRHwwj4t8WbRHQJZLy3Goij15ZJe9L2G3CSM",
    "GXiUiIuo8H8bnSb2XlSzI7eYByGkhRj7BzFfyF71PoWZkX39KkyWpRwIr6KYGIEwCgwhAnylfPTDhafYqBuhisg9Og7X7e82MLHt",
    "2iDwz2vjjAu3xcxevz9srMYzVJtEMuVvpWWJKVAiSPqpoxBPcGiYDHV2aI7CSZT7LChvGBBROuYz0CCpfdaMOL9XxW5s4XfQDnwy",
    "gZDn95nx1Who06KcT9D7igVaxpzx21UYCBPauCx72AcQwuicfZ61C2hliUSlzzs9tmO6AFa0m0SOLQ2JUSOTp3zlYDzWKDxB5Dz0"
  ];
  var blocksSecuential = [
    "oob3XkyWRlWq5zDn8RDaV10VxMyTYZ9GxrSgNPGmu69MHnGfuICuWzBQLv0QLoKEhkyui3NMCkmam14V4wmoCS3kDEV4fNjnWN2i",
    "RWB1KGpARmMKyGxJeEKbIPxovqOly1mKJqjaRuC4Eqoz9Ak8crUvcIeE9TM3u8p5LKEwwavmOiFDFOMtVYCIBHGSXmweRYoYDLwF",
    "2iDwz2vjjAu3xcxevz9srMYzVJtEMuVvpWWJKVAiSPqpoxBPcGiYDHV2aI7CSZT7LChvGBBROuYz0CCpfdaMOL9XxW5s4XfQDnwy",
    "gZDn95nx1Who06KcT9D7igVaxpzx21UYCBPauCx72AcQwuicfZ61C2hliUSlzzs9tmO6AFa0m0SOLQ2JUSOTp3zlYDzWKDxB5Dz0",
    "yleQxFkFghT3uDEzxSrQVbKLN9Y3pMYbh447kbsDEKCCR7I07yFu6ul9PnDYGaxBZ5kVeIGz2Caph6hrMfOEtfwT9dwkF5Q9WWnp",
    "tA1aqTaj2UQwJlqyUR7zpdZZTHGdiaDGHuhjd2UFSqtfh0c0qDPj6bwIX7tWLKSlVRHwwj4t8WbRHQJZLy3Goij15ZJe9L2G3CSM",
    "Lb7PtEGfnKxByD8ZNxr36TAFTYkeaeKFl4D2qo6JdTlg3iYWLXte6nEhymbeLmmoz7ElqnkIqDeZVvqdtbda6CjUcwYCoyHdbpnh",
    "8aQIYN2CoTHktH9Z4KHXHwWj8Elozt5tlaT4vfOhyE3vA2AXn6P9LTefIMdDHdsNlKpnlt3RTHHFJNOUTGdA51FbeRsQ1dTd35I5",
    "GXiUiIuo8H8bnSb2XlSzI7eYByGkhRj7BzFfyF71PoWZkX39KkyWpRwIr6KYGIEwCgwhAnylfPTDhafYqBuhisg9Og7X7e82MLHt"
  ];

  beforeAll((done) => {
    done();
  });

  it("Should return a Token", async () => {
    const res = await request(app)
      .get("/api/gettoken")

    token = res.text;
    expect(res.text).not.toBeNull();
  });

  it("Should return a ordered list", async () => {
    const res = await request(app)
      .post("/api/check")
      .send({ data: blocksNotSecuential });

    expect(res.body).toEqual(blocksSecuential);
  });

  it("Should return a false", async () => {
    const res = await request(app)
      .post("/api/verify")
      .send({ encoded: blocksNotSecuential });

    expect(res.text).toEqual("false");
  });

  it("Should return a true", async () => {
    const res = await request(app)
      .post("/api/verify")
      .send({ encoded: blocksSecuential });

    expect(res.text).toEqual("true");
  });

  afterAll((done) => {
    done();
  });
});
