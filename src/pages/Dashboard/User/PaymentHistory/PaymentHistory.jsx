import { useEffect, useState } from "react";
import useAxiosPublic from "../../../../hooks/useAxiosPublic";
import { Table } from "flowbite-react";

const PaymentHistory = () => {
  const [payments, setPayments] = useState([]);
  console.log(payments);
  const axiosPublic = useAxiosPublic();
  useEffect(() => {
    axiosPublic("/payments").then((res) => setPayments(res.data));
  }, [axiosPublic]);
  return (
    <div>
      <h2 className="text-center font-semibold text-2xl capitalize border-b-2 pb-2">
        Payment History
      </h2>
      <div className="h-[calc(100vh-130px)] overflow-y-auto">
        <Table striped>
          <Table.Head>
            <Table.HeadCell>#</Table.HeadCell>
            <Table.HeadCell>Email</Table.HeadCell>
            <Table.HeadCell>TxId</Table.HeadCell>
            <Table.HeadCell>Total Amount</Table.HeadCell>
            <Table.HeadCell>Date $ time</Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {payments?.map((item, idx) => (
              <Table.Row
                key={item?._id}
                className="bg-white dark:border-gray-700 dark:bg-gray-800"
              >
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {idx + 1}
                </Table.Cell>
                <Table.Cell>{item?.email}</Table.Cell>
                <Table.Cell>{item?.transactionId}</Table.Cell>
                <Table.Cell>$ {item?.price}</Table.Cell>
                <Table.Cell>$ {item?.date}</Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default PaymentHistory;
