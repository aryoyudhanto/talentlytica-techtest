import React, { useState, useEffect } from "react";
import Layout from "../components/Layout";

// import { DataType } from "../utils/type";
import { WrappingCard } from "../components/Card";

const index = () => {
  const [ms11, setMs11] = useState<string>("");
  const [ms12, setMs12] = useState<string>("");
  const [ms13, setMs13] = useState<string>("");
  const [ms14, setMs14] = useState<string>("");

  const [ms21, setMs21] = useState<string>("");
  const [ms22, setMs22] = useState<string>("");
  const [ms23, setMs23] = useState<string>("");
  const [ms24, setMs24] = useState<string>("");

  const [ms31, setMs31] = useState<string>("");
  const [ms32, setMs32] = useState<string>("");
  const [ms33, setMs33] = useState<string>("");
  const [ms34, setMs34] = useState<string>("");

  const [ms41, setMs41] = useState<string>("");
  const [ms42, setMs42] = useState<string>("");
  const [ms43, setMs43] = useState<string>("");
  const [ms44, setMs44] = useState<string>("");

  const [ms51, setMs51] = useState<string>("");
  const [ms52, setMs52] = useState<string>("");
  const [ms53, setMs53] = useState<string>("");
  const [ms54, setMs54] = useState<string>("");

  const [ms61, setMs61] = useState<string>("");
  const [ms62, setMs62] = useState<string>("");
  const [ms63, setMs63] = useState<string>("");
  const [ms64, setMs64] = useState<string>("");

  const [ms71, setMs71] = useState<string>("");
  const [ms72, setMs72] = useState<string>("");
  const [ms73, setMs73] = useState<string>("");
  const [ms74, setMs74] = useState<string>("");

  const [ms81, setMs81] = useState<string>("");
  const [ms82, setMs82] = useState<string>("");
  const [ms83, setMs83] = useState<string>("");
  const [ms84, setMs84] = useState<string>("");

  const [ms91, setMs91] = useState<string>("");
  const [ms92, setMs92] = useState<string>("");
  const [ms93, setMs93] = useState<string>("");
  const [ms94, setMs94] = useState<string>("");

  const [ms101, setMs101] = useState<string>("");
  const [ms102, setMs102] = useState<string>("");
  const [ms103, setMs103] = useState<string>("");
  const [ms104, setMs104] = useState<string>("");

  const [data, setData] = useState<string>("");

  useEffect(() => {
    fetchData();
  }, []);

  function fetchData() {
    const getAsPen = localStorage.getItem("AspekPenilaian");
    if (getAsPen) {
      setData(JSON.parse(getAsPen));
    }
  }
  
//   cek output pada console atapun pada localstorage
  console.log(data);

  function submitAsPen(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const aspekPenilaian =
      JSON.parse(localStorage.getItem("AspekPenilaian") || "[]") || [];
    const penilaian = {
      aspek_penilaian_1: {
        mahasiswa_1: parseInt(ms11),
        mahasiswa_2: parseInt(ms21),
        mahasiswa_3: parseInt(ms31),
        mahasiswa_4: parseInt(ms41),
        mahasiswa_5: parseInt(ms51),
        mahasiswa_6: parseInt(ms61),
        mahasiswa_7: parseInt(ms71),
        mahasiswa_8: parseInt(ms81),
        mahasiswa_9: parseInt(ms91),
        mahasiswa_10: parseInt(ms101),
      },
      aspek_penilaian_2: {
        mahasiswa_1: parseInt(ms12),
        mahasiswa_2: parseInt(ms22),
        mahasiswa_3: parseInt(ms32),
        mahasiswa_4: parseInt(ms42),
        mahasiswa_5: parseInt(ms52),
        mahasiswa_6: parseInt(ms62),
        mahasiswa_7: parseInt(ms72),
        mahasiswa_8: parseInt(ms82),
        mahasiswa_9: parseInt(ms92),
        mahasiswa_10: parseInt(ms102),
      },
      aspek_penilaian_3: {
        mahasiswa_1: parseInt(ms13),
        mahasiswa_2: parseInt(ms23),
        mahasiswa_3: parseInt(ms33),
        mahasiswa_4: parseInt(ms43),
        mahasiswa_5: parseInt(ms53),
        mahasiswa_6: parseInt(ms63),
        mahasiswa_7: parseInt(ms73),
        mahasiswa_8: parseInt(ms83),
        mahasiswa_9: parseInt(ms93),
        mahasiswa_10: parseInt(ms103),
      },
      aspek_penilaian_4: {
        mahasiswa_1: parseInt(ms14),
        mahasiswa_2: parseInt(ms24),
        mahasiswa_3: parseInt(ms34),
        mahasiswa_4: parseInt(ms44),
        mahasiswa_5: parseInt(ms54),
        mahasiswa_6: parseInt(ms64),
        mahasiswa_7: parseInt(ms74),
        mahasiswa_8: parseInt(ms84),
        mahasiswa_9: parseInt(ms94),
        mahasiswa_10: parseInt(ms104),
      },
    };
    aspekPenilaian.push(penilaian);
    localStorage.setItem("AspekPenilaian", JSON.stringify(aspekPenilaian));
  }

  return (
    <Layout>
      <WrappingCard judul="Aspek Penilaian Mahasiswa">
        <form onSubmit={submitAsPen}>
          <table className="table table-zebra w-full my-7 ">
            <thead className="bg-gray-50">
              <tr>
                <th className="text-center text-lg capitalize">No</th>
                <th className="text-center text-lg capitalize">
                  Aspek Penilaian 1
                </th>
                <th className="text-center text-lg capitalize">
                  Aspek Penilaian 2
                </th>
                <th className="text-center text-lg capitalize">
                  Aspek Penilaian 3
                </th>
                <th className="text-center text-lg capitalize">
                  Aspek Penilaian 4
                </th>
              </tr>
            </thead>
            <tbody>
              <>
                <tr>
                  <th className="text-center font-normal">Mahasiswa 1</th>
                  <td>
                    <select
                      className="select select-bordered border-sky text-black font-normal w-full"
                      onChange={(e) => setMs11(e.target.value)}
                    >
                      <option value="">Pilih Nilai</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </td>
                  <td>
                    <select
                      className="select select-bordered border-sky text-black font-normal w-full"
                      onChange={(e) => setMs12(e.target.value)}
                    >
                      <option value="">Pilih Nilai</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </td>
                  <td>
                    <select
                      className="select select-bordered border-sky text-black font-normal w-full"
                      onChange={(e) => setMs13(e.target.value)}
                    >
                      <option value="">Pilih Nilai</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </td>
                  <td>
                    <select
                      className="select select-bordered border-sky text-black font-normal w-full"
                      onChange={(e) => setMs14(e.target.value)}
                    >
                      <option value="">Pilih Nilai</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <th className="text-center font-normal">Mahasiswa 2</th>
                  <td>
                    <select
                      className="select select-bordered border-sky text-black font-normal w-full"
                      onChange={(e) => setMs21(e.target.value)}
                    >
                      <option value="">Pilih Nilai</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </td>
                  <td>
                    <select
                      className="select select-bordered border-sky text-black font-normal w-full"
                      onChange={(e) => setMs22(e.target.value)}
                    >
                      <option value="">Pilih Nilai</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </td>
                  <td>
                    <select
                      className="select select-bordered border-sky text-black font-normal w-full"
                      onChange={(e) => setMs23(e.target.value)}
                    >
                      <option value="">Pilih Nilai</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </td>
                  <td>
                    <select
                      className="select select-bordered border-sky text-black font-normal w-full"
                      onChange={(e) => setMs24(e.target.value)}
                    >
                      <option value="">Pilih Nilai</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <th className="text-center font-normal">Mahasiswa 3</th>
                  <td>
                    <select
                      className="select select-bordered border-sky text-black font-normal w-full"
                      onChange={(e) => setMs31(e.target.value)}
                    >
                      <option value="">Pilih Nilai</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </td>
                  <td>
                    <select
                      className="select select-bordered border-sky text-black font-normal w-full"
                      onChange={(e) => setMs32(e.target.value)}
                    >
                      <option value="">Pilih Nilai</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </td>
                  <td>
                    <select
                      className="select select-bordered border-sky text-black font-normal w-full"
                      onChange={(e) => setMs33(e.target.value)}
                    >
                      <option value="">Pilih Nilai</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </td>
                  <td>
                    <select
                      className="select select-bordered border-sky text-black font-normal w-full"
                      onChange={(e) => setMs34(e.target.value)}
                    >
                      <option value="">Pilih Nilai</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <th className="text-center font-normal">Mahasiswa 4</th>
                  <td>
                    <select
                      className="select select-bordered border-sky text-black font-normal w-full"
                      onChange={(e) => setMs41(e.target.value)}
                    >
                      <option value="">Pilih Nilai</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </td>
                  <td>
                    <select
                      className="select select-bordered border-sky text-black font-normal w-full"
                      onChange={(e) => setMs42(e.target.value)}
                    >
                      <option value="">Pilih Nilai</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </td>
                  <td>
                    <select
                      className="select select-bordered border-sky text-black font-normal w-full"
                      onChange={(e) => setMs43(e.target.value)}
                    >
                      <option value="">Pilih Nilai</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </td>
                  <td>
                    <select
                      className="select select-bordered border-sky text-black font-normal w-full"
                      onChange={(e) => setMs44(e.target.value)}
                    >
                      <option value="">Pilih Nilai</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <th className="text-center font-normal">Mahasiswa 5</th>
                  <td>
                    <select
                      className="select select-bordered border-sky text-black font-normal w-full"
                      onChange={(e) => setMs51(e.target.value)}
                    >
                      <option value="">Pilih Nilai</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </td>
                  <td>
                    <select
                      className="select select-bordered border-sky text-black font-normal w-full"
                      onChange={(e) => setMs52(e.target.value)}
                    >
                      <option value="">Pilih Nilai</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </td>
                  <td>
                    <select
                      className="select select-bordered border-sky text-black font-normal w-full"
                      onChange={(e) => setMs53(e.target.value)}
                    >
                      <option value="">Pilih Nilai</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </td>
                  <td>
                    <select
                      className="select select-bordered border-sky text-black font-normal w-full"
                      onChange={(e) => setMs54(e.target.value)}
                    >
                      <option value="">Pilih Nilai</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <th className="text-center font-normal">Mahasiswa 6</th>
                  <td>
                    <select
                      className="select select-bordered border-sky text-black font-normal w-full"
                      onChange={(e) => setMs61(e.target.value)}
                    >
                      <option value="">Pilih Nilai</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </td>
                  <td>
                    <select
                      className="select select-bordered border-sky text-black font-normal w-full"
                      onChange={(e) => setMs62(e.target.value)}
                    >
                      <option value="">Pilih Nilai</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </td>
                  <td>
                    <select
                      className="select select-bordered border-sky text-black font-normal w-full"
                      onChange={(e) => setMs63(e.target.value)}
                    >
                      <option value="">Pilih Nilai</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </td>
                  <td>
                    <select
                      className="select select-bordered border-sky text-black font-normal w-full"
                      onChange={(e) => setMs64(e.target.value)}
                    >
                      <option value="">Pilih Nilai</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <th className="text-center font-normal">Mahasiswa 7</th>
                  <td>
                    <select
                      className="select select-bordered border-sky text-black font-normal w-full"
                      onChange={(e) => setMs71(e.target.value)}
                    >
                      <option value="">Pilih Nilai</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </td>
                  <td>
                    <select
                      className="select select-bordered border-sky text-black font-normal w-full"
                      onChange={(e) => setMs72(e.target.value)}
                    >
                      <option value="">Pilih Nilai</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </td>
                  <td>
                    <select
                      className="select select-bordered border-sky text-black font-normal w-full"
                      onChange={(e) => setMs73(e.target.value)}
                    >
                      <option value="">Pilih Nilai</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </td>
                  <td>
                    <select
                      className="select select-bordered border-sky text-black font-normal w-full"
                      onChange={(e) => setMs74(e.target.value)}
                    >
                      <option value="">Pilih Nilai</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <th className="text-center font-normal">Mahasiswa 8</th>
                  <td>
                    <select
                      className="select select-bordered border-sky text-black font-normal w-full"
                      onChange={(e) => setMs81(e.target.value)}
                    >
                      <option value="">Pilih Nilai</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </td>
                  <td>
                    <select
                      className="select select-bordered border-sky text-black font-normal w-full"
                      onChange={(e) => setMs82(e.target.value)}
                    >
                      <option value="">Pilih Nilai</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </td>
                  <td>
                    <select
                      className="select select-bordered border-sky text-black font-normal w-full"
                      onChange={(e) => setMs83(e.target.value)}
                    >
                      <option value="">Pilih Nilai</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </td>
                  <td>
                    <select
                      className="select select-bordered border-sky text-black font-normal w-full"
                      onChange={(e) => setMs84(e.target.value)}
                    >
                      <option value="">Pilih Nilai</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <th className="text-center font-normal">Mahasiswa 9</th>
                  <td>
                    <select
                      className="select select-bordered border-sky text-black font-normal w-full"
                      onChange={(e) => setMs91(e.target.value)}
                    >
                      <option value="">Pilih Nilai</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </td>
                  <td>
                    <select
                      className="select select-bordered border-sky text-black font-normal w-full"
                      onChange={(e) => setMs92(e.target.value)}
                    >
                      <option value="">Pilih Nilai</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </td>
                  <td>
                    <select
                      className="select select-bordered border-sky text-black font-normal w-full"
                      onChange={(e) => setMs93(e.target.value)}
                    >
                      <option value="">Pilih Nilai</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </td>
                  <td>
                    <select
                      className="select select-bordered border-sky text-black font-normal w-full"
                      onChange={(e) => setMs94(e.target.value)}
                    >
                      <option value="">Pilih Nilai</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </td>
                </tr>
                <tr>
                  <th className="text-center font-normal">Mahasiswa 10</th>
                  <td>
                    <select
                      className="select select-bordered border-sky text-black font-normal w-full"
                      onChange={(e) => setMs101(e.target.value)}
                    >
                      <option value="">Pilih Nilai</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </td>
                  <td>
                    <select
                      className="select select-bordered border-sky text-black font-normal w-full"
                      onChange={(e) => setMs102(e.target.value)}
                    >
                      <option value="">Pilih Nilai</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </td>
                  <td>
                    <select
                      className="select select-bordered border-sky text-black font-normal w-full"
                      onChange={(e) => setMs103(e.target.value)}
                    >
                      <option value="">Pilih Nilai</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </td>
                  <td>
                    <select
                      className="select select-bordered border-sky text-black font-normal w-full"
                      onChange={(e) => setMs104(e.target.value)}
                    >
                      <option value="">Pilih Nilai</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </td>
                </tr>
              </>
            </tbody>
          </table>
          <div className="flex w-full justify-end">
            <button className="btn my-5 bg-blue-700 hover:bg-blue-600 text-white border-none hover:scale-105 w-1/6">
              Simpan
            </button>
          </div>
        </form>
      </WrappingCard>
    </Layout>
  );
};

export default index;
