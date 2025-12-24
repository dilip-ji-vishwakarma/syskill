/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { SquarePen, Trash2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type DataTableProps = {
  caption?: string;
  data: Record<string, any>[];
  onDelete?: (row: Record<string, any>, index: number) => Promise<void> | void;
};

const isImageUrl = (value: any) => {
  if (typeof value !== "string") return false;
  return value.startsWith("http") && /\.(jpeg|jpg|gif|png|webp)$/i.test(value);
};

export const DataTable = ({ caption, data, onDelete }: DataTableProps) => {
  const headers = data.length ? Object.keys(data[0]) : [];
  const [loading, setLoading] = useState<number | null>(null);

  const handleDelete = async (row: Record<string, any>, index: number) => {
    if (!onDelete) return;
    setLoading(index);
    await onDelete(row, index);
    setLoading(null);
  };

  return (
    <div className="rounded-lg border bg-card">
      <Table>
        {caption && (
          <TableCaption className="mt-4 text-sm text-muted-foreground">
            {caption}
          </TableCaption>
        )}

        {/* Header */}
        <TableHeader className="bg-background/80">
          <TableRow>
            {headers.map((key) => (
              <TableHead
                key={key}
                className="capitalize font-semibold text-foreground"
              >
                {key.replace(/_/g, " ")}
              </TableHead>
            ))}
            <TableHead className="text-right font-semibold">Action</TableHead>
          </TableRow>
        </TableHeader>

        {/* Body */}
        <TableBody>
          {data.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={headers.length + 1}
                className="py-10 text-center text-muted-foreground"
              >
                No data found
              </TableCell>
            </TableRow>
          ) : (
            data.map((row, rowIndex) => (
              <TableRow
                key={rowIndex}
                className="hover:bg-muted/40 transition-colors"
              >
                {headers.map((key) => {
                  const value = row[key];

                  return (
                    <TableCell key={key} className="py-4 align-middle">
                      {isImageUrl(value) ? (
                        <Image
                          src={value}
                          alt={key}
                          width={44}
                          height={60}
                          className="rounded-md border object-cover"
                        />
                      ) : (
                        <span className="text-sm font-medium">{value}</span>
                      )}
                    </TableCell>
                  );
                })}

                <TableCell className="py-4 text-right">
                  <div className="inline-flex items-center gap-2">
                    <Button
                      asChild
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 hover:bg-green/10 hover:text-success"
                    >
                      <Link href={`/story/${row.id}`}>
                        <SquarePen size={16} />
                      </Link>
                    </Button>

                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 hover:bg-red-50 hover:text-red-600"
                      onClick={() => handleDelete(row, rowIndex)}
                      disabled={loading === rowIndex}
                    >
                      {loading === rowIndex ? (
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-t-transparent border-red-500" />
                      ) : (
                        <Trash2 size={16} />
                      )}
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
};
