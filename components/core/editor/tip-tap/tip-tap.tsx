"use client"
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Subscript from "@tiptap/extension-subscript";
import Superscript from "@tiptap/extension-superscript";
import Highlight from '@tiptap/extension-highlight';
import TextAlign from '@tiptap/extension-text-align';
import Link from '@tiptap/extension-link';
import { Color } from '@tiptap/extension-color';
import Image from '@tiptap/extension-image';
import ResizeImage from "tiptap-extension-resize-image";
import Youtube from '@tiptap/extension-youtube';
import Code from '@tiptap/extension-code';
import Blockquote from '@tiptap/extension-blockquote';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import Heading from '@tiptap/extension-heading';
import TableCell from '@tiptap/extension-table-cell'
import TableHeader from '@tiptap/extension-table-header'
import TableRow from '@tiptap/extension-table-row'
import Gapcursor from '@tiptap/extension-gapcursor'
import { useEditorContext } from "./editor-context";
import { Table } from "@tiptap/extension-table";
import { TextStyle } from "@tiptap/extension-text-style";


type TipTapProps = {
  editorString: any;
  onFocus: () => void;
  courses: any;
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const TipTap = ({ editorString, onFocus, courses }: TipTapProps) => {

  const { setCurrentEditor } = useEditorContext();

  const editor = useEditor({
     immediatelyRender: false,
    extensions: [
      StarterKit,
      Color,
      TextStyle,
      Underline,
      Subscript,
      Superscript,
      ResizeImage,
      Code,
      Document,
      Blockquote,
      Paragraph,
      Text,
      Gapcursor,
      Table.configure({
        resizable: true,
      }),
      TableRow,
      TableHeader,
      TableCell,
      Heading.configure({
        levels: [1, 2, 3, 4, 5, 6],

      }),
      Youtube.configure({
        controls: false,
        nocookie: true,
        allowFullscreen: false,
        inline: true,
        HTMLAttributes: {
          class: 'youtube-video draggable-video',
        },
      }),
      Image.configure({
        inline: true,
      }),
      Highlight.configure({ multicolor: true }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Link.configure({
        openOnClick: true,
        autolink: true,
        defaultProtocol: 'https',
      }),
    ],
    content: editorString,
    autofocus: true,
    onCreate: ({ editor }) => {
      console.log("Editor created" , editor );
    },
    onUpdate: ({ editor }) => {
     console.log("Editor updated" , editor );
    },
    onFocus: () => {
      if (onFocus) {
        onFocus();
      }
    },
  });

  return (
    <div className="mt-5 mb-20">
      <div className="editor-container w-full dark:text-secondary bg-white border mt-3 pb-[150px] border-[#c7c7c7]" onClick={() => { setCurrentEditor(editor); }}>
        <EditorContent
          editor={editor}
          className="minimal-tiptap-editor lg:overflow-auto md:p-10 p-6 border-destructive focus-within:border-destructive lg:h-[100vh]"
          placeholder="Type your description here"
        />
      </div>
    </div>
  );
};