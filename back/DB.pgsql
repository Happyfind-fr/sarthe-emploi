--
-- PostgreSQL database dump
--

-- Dumped from database version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)
-- Dumped by pg_dump version 12.12 (Ubuntu 12.12-0ubuntu0.20.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: a; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.a (
    id integer NOT NULL
);


ALTER TABLE public.a OWNER TO postgres;

--
-- Name: apply; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.apply (
    id integer NOT NULL
);


ALTER TABLE public.apply OWNER TO postgres;

--
-- Name: appliances; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.appliances (
    id integer NOT NULL,
    id_user integer NOT NULL,
    id_offers integer,
    content text
);


ALTER TABLE public.appliances OWNER TO postgres;

--
-- Name: companies; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.companies (
    id integer NOT NULL,
    siret bigint NOT NULL,
    lastName character varying(255) NOT NULL,
    city character varying(255) NOT NULL,
    logo character varying(255),
    email character varying(255) NOT NULL,
    isVerified boolean DEFAULT false NOT NULL,
    created_at timestamp without time zone
);


ALTER TABLE public.companies OWNER TO postgres;

--
-- Name: got; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.got (
    id integer NOT NULL
);


ALTER TABLE public.got OWNER TO postgres;

--
-- Name: messages; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.messages (
    id integer NOT NULL,
    id_sender integer NOT NULL,
    id_receiver integer NOT NULL,
    content text,
    created_at timestamp without time zone,
    isreport boolean DEFAULT false NOT NULL
);


ALTER TABLE public.messages OWNER TO postgres;

--
-- Name: offers; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.offers (
    id integer NOT NULL,
    title character varying(255) NOT NULL,
    description text NOT NULL,
    created_at timestamp without time zone,
    remote character varying(255),
    contract character varying(50),
    turnover character varying(255),
    start_date timestamp without time zone,
    end_date timestamp without time zone
);


ALTER TABLE public.offers OWNER TO postgres;

--
-- Name: owns; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.owns (
    id integer NOT NULL
);


ALTER TABLE public.owns OWNER TO postgres;

--
-- Name: could_receive; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.could_receive (
    id integer NOT NULL
);


ALTER TABLE public.could_receive OWNER TO postgres;

--
-- Name: social_networks; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.social_networks (
    id integer NOT NULL,
    linkedin character varying(255),
    indeed character varying(255)
);


ALTER TABLE public.social_networks OWNER TO postgres;

--
-- Name: roles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.roles (
    id integer NOT NULL,
    isVerified boolean DEFAULT false NOT NULL,
    isRecruiter boolean DEFAULT false NOT NULL,
    isAdmin boolean DEFAULT false NOT NULL,
    isBan boolean DEFAULT false NOT NULL
);


ALTER TABLE public.roles OWNER TO postgres;

--
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.users (
    id integer NOT NULL,
    firstName character varying(50) NOT NULL,
    lastName character varying(50) NOT NULL,
    email character varying(50) NOT NULL,
    password character varying(255) NOT NULL,
    avatar character varying(255),
    created_at timestamp without time zone
);


ALTER TABLE public.users OWNER TO postgres;

--
-- Data for Name: a; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.a (id) FROM stdin;
\.


--
-- Data for Name: apply; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.apply (id) FROM stdin;
\.


--
-- Data for Name: appliances; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.appliances (id, id_user, id_offers, content) FROM stdin;
\.


--
-- Data for Name: companies; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.companies (id, siret, lastName, city, logo, email, isVerified, created_at) FROM stdin;
\.


--
-- Data for Name: got; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.got (id) FROM stdin;
\.


--
-- Data for Name: messages; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.messages (id, id_sender, id_receiver, content, created_at, isreport) FROM stdin;
\.


--
-- Data for Name: offers; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.offers (id, title, description, created_at, remote, contract, turnover, start_date, end_date) FROM stdin;
\.


--
-- Data for Name: owns; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.owns (id) FROM stdin;
\.


--
-- Data for Name: could_receive; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.could_receive (id) FROM stdin;
\.


--
-- Data for Name: social_networks; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.social_networks (id, linkedin, indeed) FROM stdin;
\.


--
-- Data for Name: roles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.roles (id, isVerified, isRecruiter, isAdmin, isBan) FROM stdin;
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.users (id, firstName, lastName, email, password, avatar, created_at) FROM stdin;
\.


--
-- Name: a a_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.a
    ADD CONSTRAINT a_pkey PRIMARY KEY (id);


--
-- Name: apply apply_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.apply
    ADD CONSTRAINT apply_pkey PRIMARY KEY (id);


--
-- Name: appliances appliances_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.appliances
    ADD CONSTRAINT appliances_pkey PRIMARY KEY (id);


--
-- Name: companies companies_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.companies
    ADD CONSTRAINT companies_pkey PRIMARY KEY (id);


--
-- Name: companies companies_siret_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.companies
    ADD CONSTRAINT companies_siret_key UNIQUE (siret);


--
-- Name: got got_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.got
    ADD CONSTRAINT got_pkey PRIMARY KEY (id);


--
-- Name: messages messages_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.messages
    ADD CONSTRAINT messages_pkey PRIMARY KEY (id);


--
-- Name: offers offers_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.offers
    ADD CONSTRAINT offers_pkey PRIMARY KEY (id);


--
-- Name: owns owns_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.owns
    ADD CONSTRAINT owns_pkey PRIMARY KEY (id);


--
-- Name: could_receive could_receive_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.could_receive
    ADD CONSTRAINT could_receive_pkey PRIMARY KEY (id);


--
-- Name: social_networks social_networks_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.social_networks
    ADD CONSTRAINT social_networks_pkey PRIMARY KEY (id);


--
-- Name: roles roles_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.roles
    ADD CONSTRAINT roles_pkey PRIMARY KEY (id);


--
-- Name: users users_email_key; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_email_key UNIQUE (email);


--
-- Name: users users_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (id);


--
-- Name: apply apply_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.apply
    ADD CONSTRAINT apply_id_fkey FOREIGN KEY (id) REFERENCES public.users(id);


--
-- Name: got got_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.got
    ADD CONSTRAINT got_id_fkey FOREIGN KEY (id) REFERENCES public.users(id);


--
-- Name: offers offers_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.offers
    ADD CONSTRAINT offers_id_fkey FOREIGN KEY (id) REFERENCES public.users(id);


--
-- Name: owns owns_id_fkey; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.owns
    ADD CONSTRAINT owns_id_fkey FOREIGN KEY (id) REFERENCES public.users(id);


--
-- PostgreSQL database dump complete
--

