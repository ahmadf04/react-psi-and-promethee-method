import React, { memo } from 'react'
import { Box, Table } from 'libs'
import {
    cekBobotPekerjaan,
    cekBobotPenghasilan,
    cekBobotStatusRumah,
    cekBobotStatusSiswa
} from 'shared/utils'

const TableMatrix = ({ dataAlternatif }) => {
    return (
        <Box>
            {dataAlternatif.length >= 1 ? (
                <Table>
                    <thead>
                        <tr>
                            <td rowSpan="2">Alternatif</td>
                            <td colSpan="4" className="has-text-centered">Kriteria</td>
                        </tr>
                        <tr>
                            <td>Pekerjaan</td>
                            <td>Penghasilan</td>
                            <td>Status Rumah</td>
                            <td>Status Siswa</td>
                        </tr>
                    </thead>
                    <tbody>
                        {dataAlternatif?.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.alternatif}</td>
                                    <td>
                                        {parseInt(cekBobotPekerjaan(item.pekerjaan)) / 4}
                                    </td>
                                    <td>
                                        {1 / parseInt(cekBobotPenghasilan(item.penghasilan))}
                                    </td>
                                    <td>
                                        {parseInt(cekBobotStatusRumah(item.status_rumah)) / 4}
                                    </td>
                                    <td>
                                        {parseInt(cekBobotStatusSiswa(item.status_siswa)) / 4}
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            ) : (
                <p>Tidak ada data alternatif.</p>
            )}
        </Box>
    )
}

export default memo(TableMatrix)
