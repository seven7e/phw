#!/bin/bash

cargo +nightly contract build
cargo +nightly contract generate-metadata
