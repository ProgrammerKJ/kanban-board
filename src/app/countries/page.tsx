'use client';

import { useQuery } from "@apollo/client";
import { GetCountriesDocument } from "@/graphql/generated/graphql";

export default function Countries(){
    const { data, loading, error } = useQuery(GetCountriesDocument);

    if (loading) return <div className="p-8">Loading countries...</div>;
    if (error) return <div className="p-8">{error.message}</div>;

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-4xl font-bold mb-8">Countries</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data?.countries?.map((country) => (
                    <div key={country.code} className="border p-4 rounded">
                        <h2 className="font-semibold">{country.name}</h2>
                        <p className="text-gray-600">{country.code}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}