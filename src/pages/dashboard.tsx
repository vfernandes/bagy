import React from 'react';
import Main from '../components/Main';
import InfoCard from '../components/InfoCard';
import InfoCardAside from '../components/InfoCardAside';
import ChartView from '../components/Chart'
import TableFatured from '../components/TableFatured'
import TableSales from '../components/TableSales'

const Dashboard: React.SFC = () => {
    return (
        <Main title="Visão Geral">
            <div className="container-row">
                <div className="row">
                    <InfoCard title="Total de Lojas" resume="7213" />
                    <InfoCard title="Faturamento total" resume="100.000,00" />
                    <InfoCard title="Loja destaque" resume="Estilo Pri" />
                    <InfoCard title="Meta Mensal" resume="110.000,00" />
                </div>
            </div>

            <div className="content-styled chart">
                <ChartView />

                <div className="info-group">
                    <InfoCardAside title="loja" value="Estilo Pri" customClass="select" />
                    <InfoCardAside title="Mês" value="Julho" customClass="select" />
                    <InfoCardAside title="Ano" value="2020" customClass="select" />
                    <InfoCardAside title="Total de faturamento" value="R$ 45.000,00" />
                    <InfoCardAside title="Análise comparativa" value="Positivo" customClass="positive" />
                </div>
            </div>


            <div className="container-row">
                <div className="row">
                    <div className="col-12 col-lg-6">
                        <TableFatured />
                    </div>
                    <div className="col-12 col-lg-6">
                        <TableSales />
                    </div>
                </div>
            </div>

        </Main>
    );
}

export default Dashboard;