import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { QUERY_PDFS } from "../../utils/queries";
import { REMOVE_PDF } from "../../utils/mutations";
import { useParams } from 'react-router-dom';

const PdfList = () => {
    const { pdfId } = useParams();
    const { loading, data, error } = useQuery(QUERY_PDFS, {
        variables: { pdfId }
    });
    const pdfs = data?.pdfs || [];

    const [removePdf] = useMutation(REMOVE_PDF, {
        onCompleted: (data) => {
            window.alert("Pdf Removed Successfully");
        },
        onError: (error) => {
            window.alert(error.message)
        }
    });

    const handleRemovePdf = (pdfId) => {
        if (window.confirm("Are you sure you want to remove this pdf?")) {
            removePdf({ variables: { pdfId } });
        }
    };

    console.log(error);

    if (error) return <h1>Error: {error.message}</h1>;

    return (
        <main>
            <div className="flex-row justify-center">
                <div className="col-12 col-md-10 my-3">
                    {loading ? (
                        <div>Loading. . .</div>
                    ) : (
                        <div>
                            <h3 className="text-primary">Here is the current roster of pdfs</h3>
                            <div className="flex-row justify-space-between my-4">
                                {pdfs.map((pdf) => (
                                    <div key={pdf._id} className="col-12 col-xl-6">
                                        <div className="card mb-3">
                                            <h4 className="card-header p-2 m-0">
                                                {pdf.fileName} {pdf.path} {pdf._id} <br />
                                                <button onClick={() => handleRemovePdf(pdf._id)}>Remove Pdf</button>
                                            </h4>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </main>
    );
};

export default PdfList;


