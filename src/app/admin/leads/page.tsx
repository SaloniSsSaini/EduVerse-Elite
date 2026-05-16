"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

type Lead = {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  program?: string | null;
  source: string;
  createdAt: string;
  status?: string;
};

export default function AdminLeadsPage() {
  const [token, setToken] = useState("");
  const [leads, setLeads] = useState<Lead[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchLeads = async () => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/leads", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed");
      setLeads(data.leads);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Error loading leads");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold">Leads</h1>
      <p className="mt-2 text-sm text-muted-foreground">
        Authenticate with ADMIN_SECRET. In development, API works without token if secret is unset.
      </p>

      <div className="mt-6 flex gap-3 max-w-md">
        <Input
          type="password"
          placeholder="Admin secret token"
          value={token}
          onChange={(e) => setToken(e.target.value)}
        />
        <Button onClick={fetchLeads} disabled={loading}>
          {loading ? "Loading..." : "Load Leads"}
        </Button>
      </div>

      {error && <p className="mt-4 text-sm text-red-500">{error}</p>}

      <div className="mt-8 overflow-x-auto rounded-xl border border-border">
        <table className="w-full text-sm">
          <thead className="bg-secondary/50">
            <tr>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Email</th>
              <th className="p-3 text-left">Phone</th>
              <th className="p-3 text-left">Program</th>
              <th className="p-3 text-left">Source</th>
              <th className="p-3 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {leads.length === 0 ? (
              <tr>
                <td colSpan={6} className="p-8 text-center text-muted-foreground">
                  No leads loaded. Submit a form on the site or configure DATABASE_URL.
                </td>
              </tr>
            ) : (
              leads.map((lead) => (
                <tr key={lead.id} className="border-t border-border">
                  <td className="p-3">{lead.fullName}</td>
                  <td className="p-3">{lead.email}</td>
                  <td className="p-3">{lead.phone}</td>
                  <td className="p-3">{lead.program || "—"}</td>
                  <td className="p-3">{lead.source}</td>
                  <td className="p-3">{new Date(lead.createdAt).toLocaleDateString()}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
